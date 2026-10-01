import net from "node:net";
import tls from "node:tls";

const REQUIRED_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"];

function json(response, status, body) {
  response.status(status).json(body);
}

function clean(value, maxLength = 3000) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function validate(body) {
  const fields = {};
  const inquiryType = clean(body.inquiryType, 50);
  const name = clean(body.name, 120);
  const email = clean(body.email, 254);
  const message = clean(body.message, 3000);

  if (!["project", "job", "cooperation", "other"].includes(inquiryType)) {
    fields.inquiryType = "Bitte wählen Sie eine gültige Anfrageart aus.";
  }
  if (!name) fields.name = "Bitte geben Sie Ihren Namen ein.";
  if (!email) {
    fields.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fields.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }
  if (message.length < 20) {
    fields.message = "Die Nachricht sollte mindestens 20 Zeichen enthalten.";
  }
  if (body.privacyAccepted !== true) {
    fields.privacyAccepted = "Bitte stimmen Sie der Datenschutzerklärung zu.";
  }

  return fields;
}

function sanitizeHeader(value) {
  return clean(value, 254).replace(/[\r\n]+/g, " ");
}

function encodeSubject(value) {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function smtpCommand(socket, command, expectedCodes) {
  return new Promise((resolve, reject) => {
    let buffer = "";

    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
      socket.off("timeout", onTimeout);
    };

    const onError = (error) => {
      cleanup();
      reject(error);
    };

    const onTimeout = () => {
      cleanup();
      reject(new Error("SMTP timeout"));
    };

    const onData = (chunk) => {
      buffer += chunk.toString("utf8");
      const lines = buffer.split("\r\n").filter(Boolean);
      const lastLine = lines.at(-1);

      if (!lastLine || !/^\d{3} /.test(lastLine)) return;

      const code = Number(lastLine.slice(0, 3));
      cleanup();

      if (!expectedCodes.includes(code)) {
        reject(new Error(`SMTP error ${code}: ${buffer.trim()}`));
        return;
      }

      resolve(buffer);
    };

    socket.on("data", onData);
    socket.once("error", onError);
    socket.once("timeout", onTimeout);

    if (command !== null) socket.write(`${command}\r\n`);
  });
}

async function openSmtpConnection() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE !== "false";

  const socket = secure
    ? tls.connect({ host, port, servername: host, rejectUnauthorized: true })
    : net.connect({ host, port });

  socket.setTimeout(15000);
  await smtpCommand(socket, null, [220]);

  if (!secure) {
    await smtpCommand(socket, `EHLO ${process.env.SMTP_HELO || "portfolio.local"}`, [250]);
    await smtpCommand(socket, "STARTTLS", [220]);

    const tlsSocket = tls.connect({
      socket,
      servername: host,
      rejectUnauthorized: true,
    });

    tlsSocket.setTimeout(15000);
    await new Promise((resolve, reject) => {
      tlsSocket.once("secureConnect", resolve);
      tlsSocket.once("error", reject);
    });

    await smtpCommand(tlsSocket, `EHLO ${process.env.SMTP_HELO || "portfolio.local"}`, [250]);
    return tlsSocket;
  }

  await smtpCommand(socket, `EHLO ${process.env.SMTP_HELO || "portfolio.local"}`, [250]);
  return socket;
}

async function sendMail({ from, to, replyTo, subject, text }) {
  const socket = await openSmtpConnection();

  try {
    await smtpCommand(socket, "AUTH LOGIN", [334]);
    await smtpCommand(socket, Buffer.from(process.env.SMTP_USER).toString("base64"), [334]);
    await smtpCommand(socket, Buffer.from(process.env.SMTP_PASS).toString("base64"), [235]);
    await smtpCommand(socket, `MAIL FROM:<${from}>`, [250]);
    await smtpCommand(socket, `RCPT TO:<${to}>`, [250, 251]);
    await smtpCommand(socket, "DATA", [354]);

    const safeText = text.replace(/^\./gm, "..");
    const headers = [
      `From: Portfolio <${from}>`,
      `To: <${to}>`,
      `Reply-To: ${sanitizeHeader(replyTo)}`,
      `Subject: ${encodeSubject(subject)}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
    ].join("\r\n");

    await smtpCommand(socket, `${headers}\r\n\r\n${safeText}\r\n.`, [250]);
    await smtpCommand(socket, "QUIT", [221]);
  } finally {
    socket.destroy();
  }
}

function formatMessage(body) {
  const entries = [
    ["Anfrageart", body.inquiryType],
    ["Name", body.name],
    ["E-Mail", body.email],
    ["Unternehmen", body.company],
    ["Projektart", body.projectType],
    ["Projektstatus", body.projectStatus],
    ["Zeitraum", body.projectTimeline],
    ["Budget", body.projectBudget],
    ["Vorhandene Unterlagen", body.projectResources],
    ["Position", body.jobPosition],
    ["Beschäftigungsart", body.employmentType],
    ["Arbeitsmodell", body.workModel],
    ["Standort", body.jobLocation],
    ["Starttermin", body.desiredStartDate],
    ["Stellenbeschreibung", body.jobDescriptionUrl],
    ["Kooperationsart", body.cooperationType],
    ["Organisation / Person", body.cooperationOrganization],
    ["Kooperationsziel", body.cooperationGoal],
    ["Kooperationszeitraum", body.cooperationTimeline],
    ["Gesendet am", body.submittedAt],
  ];

  const details = entries
    .filter(([, value]) => clean(value))
    .map(([label, value]) => `${label}: ${clean(value)}`)
    .join("\n");

  return `Neue Anfrage über elfouzari.de

${details}

Nachricht:
${clean(body.message, 3000)}
`;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return json(response, 405, { success: false, error: "Methode nicht erlaubt." });
  }

  if (clean(request.body?.website)) {
    return json(response, 200, { success: true });
  }

  const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missingEnv.length) {
    console.error("Missing SMTP environment variables:", missingEnv.join(", "));
    return json(response, 500, {
      success: false,
      error: "Der E-Mail-Versand ist noch nicht vollständig konfiguriert.",
    });
  }

  const fields = validate(request.body ?? {});
  if (Object.keys(fields).length) {
    return json(response, 400, { success: false, fields });
  }

  const name = sanitizeHeader(request.body.name);
  const email = sanitizeHeader(request.body.email);
  const from = sanitizeHeader(process.env.MAIL_FROM || process.env.SMTP_USER);
  const to = sanitizeHeader(process.env.MAIL_TO);

  try {
    await sendMail({
      from,
      to,
      replyTo: email,
      subject: `Portfolio-Anfrage von ${name}`,
      text: formatMessage(request.body),
    });

    return json(response, 200, { success: true });
  } catch (error) {
    console.error("SMTP delivery failed:", error);
    return json(response, 502, {
      success: false,
      error: "Die Nachricht konnte nicht per E-Mail versendet werden.",
    });
  }
}
