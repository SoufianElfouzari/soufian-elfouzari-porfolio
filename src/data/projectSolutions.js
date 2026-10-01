const projectSolutions = {
  hubpoint24: {
    introduction:
      "HubPoint24 führt den gesamten Buchungsprozess in einer verständlichen Anwendung zusammen. Kunden können eine Leistung auswählen, einen verfügbaren Termin finden und ihre Buchung direkt absenden. Intern stehen die benötigten Informationen anschließend strukturiert zur Verfügung.",
    functions: [
      {
        title: "Digitale Buchung",
        text: "Kunden können ihre gewünschte Leistung und einen passenden Termin selbst auswählen.",
      },
      {
        title: "Verfügbarkeiten",
        text: "Es werden nur Termine angezeigt, die tatsächlich noch verfügbar sind.",
      },
      {
        title: "Zentrale Verarbeitung",
        text: "Buchungen und Kontaktdaten werden geordnet an das Unternehmen übermittelt.",
      },
      {
        title: "Klare Rückmeldung",
        text: "Nach dem Absenden erhält der Nutzer eine eindeutige Bestätigung oder verständliche Fehlermeldung.",
      },
    ],
    userFlow: [
      {
        title: "Leistung auswählen",
        text: "Der Nutzer entscheidet, welche Unterstützung oder Dienstleistung er benötigt.",
      },
      {
        title: "Termin bestimmen",
        text: "Verfügbare Zeiten werden geladen und übersichtlich zur Auswahl dargestellt.",
      },
      {
        title: "Buchung abschließen",
        text: "Kontaktdaten werden eingegeben und die Buchung sicher übermittelt.",
      },
    ],
    businessValue:
      "Das Unternehmen erhält vollständigere Anfragen, reduziert manuelle Terminabsprachen und kann Buchungen schneller bearbeiten. Gleichzeitig wissen Kunden jederzeit, welcher Schritt als Nächstes folgt.",
    decisions: [
      "Der Buchungsprozess wurde bewusst auf drei verständliche Schritte reduziert.",
      "Verfügbarkeiten werden vor der endgültigen Buchung geprüft.",
      "Fehler und erfolgreiche Buchungen werden für Nutzer klar kommuniziert.",
    ],
  },

  "kassel-reels": {
    introduction:
      "Die Website erklärt Unternehmen innerhalb weniger Sekunden, was Kassel Reels anbietet, welche Reichweite vorhanden ist und wie eine Zusammenarbeit aussehen kann. Statt allgemeiner Selbstdarstellung stehen Leistungen und Ergebnisse im Mittelpunkt.",
    functions: [
      {
        title: "Leistungsübersicht",
        text: "Unternehmen erkennen direkt, welche Werbe- und Medienleistungen angeboten werden.",
      },
      {
        title: "Ergebnisdarstellung",
        text: "Reichweite, Zielgruppen und mögliche Ergebnisse werden verständlich eingeordnet.",
      },
      {
        title: "Projektpräsentation",
        text: "Ausgewählte Arbeiten zeigen, wie Inhalte und Kampagnen umgesetzt werden.",
      },
      {
        title: "Kontaktführung",
        text: "Interessenten werden gezielt zu einer Anfrage oder einem Gespräch geführt.",
      },
    ],
    userFlow: [
      {
        title: "Angebot verstehen",
        text: "Der Besucher erfährt, was Kassel Reels für Unternehmen leisten kann.",
      },
      {
        title: "Vertrauen aufbauen",
        text: "Beispiele, Ergebnisse und Reichweite machen die Leistung greifbar.",
      },
      {
        title: "Kontakt aufnehmen",
        text: "Ein klarer Abschluss führt den Besucher direkt zur Anfrage.",
      },
    ],
    businessValue:
      "Die Website macht das Angebot leichter verkäuflich, reduziert wiederkehrende Erklärungen und schafft eine professionelle Grundlage für neue Kundenanfragen.",
    decisions: [
      "Leistungen und geschäftlicher Nutzen stehen vor allgemeinen Unternehmensinformationen.",
      "Die Startseite führt bewusst von Angebot über Vertrauen bis zum Kontakt.",
      "Die Darstellung wurde für schnelle mobile Nutzung optimiert.",
    ],
  },

  "kassel-immo": {
    introduction:
      "Kassel Immo bündelt Immobilien, Dokumente und Verwaltungsaufgaben in einem zentralen System. Nutzer müssen Informationen dadurch nicht mehr in verschiedenen Dateien oder Werkzeugen suchen.",
    functions: [
      {
        title: "Immobilienübersicht",
        text: "Alle verwalteten Immobilien werden mit den wichtigsten Informationen zentral angezeigt.",
      },
      {
        title: "Dokumentenverwaltung",
        text: "Dokumente können einer Immobilie eindeutig zugeordnet und schneller wiedergefunden werden.",
      },
      {
        title: "Verwaltungsprozesse",
        text: "Wiederkehrende Aufgaben und Informationen werden strukturiert abgebildet.",
      },
      {
        title: "Zentraler Datenbestand",
        text: "Alle Beteiligten arbeiten auf Grundlage derselben aktuellen Informationen.",
      },
    ],
    userFlow: [
      {
        title: "Immobilie auswählen",
        text: "Der Nutzer öffnet die gewünschte Immobilie aus einer zentralen Übersicht.",
      },
      {
        title: "Informationen bearbeiten",
        text: "Daten, Dokumente und Aufgaben werden direkt im passenden Bereich verwaltet.",
      },
      {
        title: "Abläufe verfolgen",
        text: "Der aktuelle Stand bleibt für berechtigte Nutzer nachvollziehbar.",
      },
    ],
    businessValue:
      "Die zentrale Verwaltung reduziert Suchzeiten, verhindert doppelte Datenpflege und verbessert die Nachvollziehbarkeit interner Immobilienprozesse.",
    decisions: [
      "Informationen werden konsequent einer konkreten Immobilie zugeordnet.",
      "Die Oberfläche orientiert sich an Verwaltungsaufgaben statt an technischen Datenstrukturen.",
      "Das System wurde für eine spätere Erweiterung um weitere Immobilien und Funktionen geplant.",
    ],
  },

  "kassel-jobs": {
    introduction:
      "Kassel Jobs soll regionale Arbeitgeber und Bewerber auf einer übersichtlichen Plattform zusammenbringen. Stellenangebote werden einheitlich dargestellt und können anhand relevanter Kriterien durchsucht werden.",
    functions: [
      {
        title: "Regionale Stellen",
        text: "Bewerber sehen gezielt Arbeitsangebote aus Kassel und Umgebung.",
      },
      {
        title: "Suche und Filter",
        text: "Stellen können nach Bereich, Beschäftigungsart und weiteren Kriterien eingegrenzt werden.",
      },
      {
        title: "Arbeitgeberprofile",
        text: "Unternehmen können sich und ihre offenen Positionen verständlich präsentieren.",
      },
      {
        title: "Klare Bewerbung",
        text: "Interessenten erkennen direkt, wie sie sich auf eine Position bewerben können.",
      },
    ],
    userFlow: [
      {
        title: "Stellen entdecken",
        text: "Der Nutzer öffnet die Übersicht regionaler Stellenangebote.",
      },
      {
        title: "Passende Stelle finden",
        text: "Filter und verständliche Angaben helfen bei der Auswahl.",
      },
      {
        title: "Bewerbung beginnen",
        text: "Die Detailseite führt direkt zum vorgesehenen Bewerbungsweg.",
      },
    ],
    businessValue:
      "Regionale Unternehmen erhalten einen fokussierten Zugang zu Bewerbern aus der Umgebung. Bewerber sparen Zeit, weil lokale Stellen strukturiert an einem Ort zu finden sind.",
    decisions: [
      "Der regionale Bezug ist ein zentraler Bestandteil des Produkts.",
      "Stelleninformationen werden einheitlich und vergleichbar aufgebaut.",
      "Suche und Filter sollen ohne komplizierte Bedienung funktionieren.",
    ],
  },

  "future-front": {
    introduction:
      "Die Future Front Website strukturiert die verschiedenen Leistungen des Unternehmens so, dass Besucher schnell verstehen, wobei das Unternehmen helfen kann. Projekte und Kontaktmöglichkeiten sind direkt in die Nutzerführung eingebunden.",
    functions: [
      {
        title: "Leistungsdarstellung",
        text: "Die verschiedenen Unternehmensleistungen werden klar voneinander abgegrenzt.",
      },
      {
        title: "Projektübersicht",
        text: "Ausgewählte Arbeiten machen die praktische Erfahrung sichtbar.",
      },
      {
        title: "Kontaktmöglichkeiten",
        text: "Interessenten können ohne Umwege eine Anfrage beginnen.",
      },
      {
        title: "Besucherauswertung",
        text: "Relevante Interaktionen können für Marketing und Optimierung ausgewertet werden.",
      },
    ],
    userFlow: [
      {
        title: "Leistung finden",
        text: "Der Besucher erkennt, welche Unterstützung für sein Vorhaben relevant ist.",
      },
      {
        title: "Arbeit einschätzen",
        text: "Projekte und Informationen vermitteln einen Eindruck der Umsetzung.",
      },
      {
        title: "Projekt anfragen",
        text: "Ein klarer Kontaktweg führt zum nächsten Gespräch.",
      },
    ],
    businessValue:
      "Die Website unterstützt Vertrieb und Marketing, macht die verschiedenen Leistungen verständlicher und schafft eine professionelle digitale Anlaufstelle für neue Anfragen.",
    decisions: [
      "Die Leistungen wurden in klar erkennbare Bereiche gegliedert.",
      "Kontaktmöglichkeiten wurden an mehreren relevanten Stellen eingebaut.",
      "Tracking wurde so integriert, dass wichtige Nutzeraktionen ausgewertet werden können.",
    ],
  },

  "shaykh-sayed-website": {
    introduction:
      "Die Plattform bündelt Unterrichte, Artikel, Termine und Mitteilungen an einem zentralen Ort. Besucher können neue Inhalte entdecken oder gezielt nach einer bestimmten Unterrichtsreihe suchen.",
    functions: [
      {
        title: "Unterrichtsreihen",
        text: "Zusammengehörige Unterrichte werden als geordnete Reihen dargestellt.",
      },
      {
        title: "Artikel und Mitteilungen",
        text: "Neue Inhalte und wichtige Informationen erhalten eigene übersichtliche Bereiche.",
      },
      {
        title: "Unterrichtstermine",
        text: "Anstehende Unterrichte können schnell gefunden und eingeordnet werden.",
      },
      {
        title: "Offizielle Kanäle",
        text: "Besucher gelangen direkt zu den offiziellen Veröffentlichungsplattformen.",
      },
    ],
    userFlow: [
      {
        title: "Inhalt auswählen",
        text: "Der Besucher öffnet einen aktuellen Unterricht, eine Reihe oder einen Artikel.",
      },
      {
        title: "Geordnet lernen",
        text: "Zusammengehörige Inhalte können in der vorgesehenen Reihenfolge aufgerufen werden.",
      },
      {
        title: "Aktuell bleiben",
        text: "Mitteilungen und offizielle Kanäle zeigen neue Inhalte und Termine.",
      },
    ],
    businessValue:
      "Die Plattform reduziert die Verteilung von Inhalten über unterschiedliche Kanäle und schafft eine verlässliche zentrale Anlaufstelle für Schüler und Besucher.",
    decisions: [
      "Unterrichtsreihen wurden gegenüber einer einfachen chronologischen Liste bevorzugt.",
      "Aktuelle Inhalte und langfristige Lernreihen wurden voneinander getrennt.",
      "Die Bedienung wurde bewusst einfach und auch für weniger technische Nutzer verständlich gehalten.",
    ],
  },

  "shaykh-sayed-app": {
    introduction:
      "Die App überträgt die wichtigsten Inhalte der Plattform in eine mobile, auf Lernen ausgerichtete Anwendung. Unterrichte und Mitteilungen sollen dadurch unterwegs schneller erreichbar sein.",
    functions: [
      {
        title: "Mobile Unterrichte",
        text: "Unterrichtsinhalte können direkt über das Smartphone geöffnet werden.",
      },
      {
        title: "Geordnete Reihen",
        text: "Zusammengehörige Lektionen bleiben in ihrer vorgesehenen Reihenfolge.",
      },
      {
        title: "Mitteilungen",
        text: "Neue Hinweise und Unterrichtstermine werden zentral angezeigt.",
      },
      {
        title: "Gespeicherte Inhalte",
        text: "Wichtige Inhalte sollen für einen späteren Zugriff vorgemerkt werden können.",
      },
    ],
    userFlow: [
      {
        title: "Reihe öffnen",
        text: "Der Nutzer wählt eine Unterrichtsreihe oder einen aktuellen Inhalt.",
      },
      {
        title: "Unterricht anhören",
        text: "Lektionen werden in einer mobilen Detailansicht wiedergegeben.",
      },
      {
        title: "Fortschritt fortsetzen",
        text: "Der Nutzer kann später zum zuletzt verwendeten Inhalt zurückkehren.",
      },
    ],
    businessValue:
      "Die mobile Anwendung erleichtert den regelmäßigen Zugriff auf Lerninhalte und macht die Unterrichtsplattform für den täglichen Gebrauch zugänglicher.",
    decisions: [
      "Die mobile Navigation konzentriert sich auf Unterrichte und Lernfortschritt.",
      "Inhalte werden nach Reihen statt ausschließlich nach Veröffentlichungsdatum strukturiert.",
      "Die Grundlage für spätere gespeicherte und offline verfügbare Inhalte wurde berücksichtigt.",
    ],
  },

  "kassel-reels-portal": {
    introduction:
      "Das Kassel Reels Portal führt Kontakte, Projekte, Aufträge und Rechnungen in einer gemeinsamen Arbeitsumgebung zusammen. Mitarbeitende müssen Informationen dadurch nicht mehr zwischen mehreren Systemen übertragen.",
    functions: [
      {
        title: "Kontaktverwaltung",
        text: "Kunden und Ansprechpartner werden zentral erfasst und verwaltet.",
      },
      {
        title: "Projekte und Aufträge",
        text: "Aufträge können Projekten zugeordnet und über ihren aktuellen Status verfolgt werden.",
      },
      {
        title: "Rechnungsprozesse",
        text: "Relevante Auftragsinformationen werden für die weitere Abrechnung vorbereitet.",
      },
      {
        title: "Automatisierungen",
        text: "Wiederkehrende Datenübertragungen und Statusänderungen werden automatisiert.",
      },
    ],
    userFlow: [
      {
        title: "Kontakt oder Projekt öffnen",
        text: "Der Nutzer beginnt bei dem relevanten Kunden oder internen Projekt.",
      },
      {
        title: "Auftrag bearbeiten",
        text: "Aufgaben, Status und Informationen werden zentral aktualisiert.",
      },
      {
        title: "Prozess abschließen",
        text: "Abgeschlossene Aufträge werden für nachfolgende Abläufe und Abrechnung vorbereitet.",
      },
    ],
    businessValue:
      "Das Portal reduziert doppelte Datenpflege, verbessert die Übersicht über laufende Aufträge und beschleunigt wiederkehrende interne Geschäftsprozesse.",
    decisions: [
      "Kontakte, Projekte und Aufträge wurden als zusammenhängender Ablauf modelliert.",
      "Statusänderungen bilden den tatsächlichen Arbeitsprozess des Unternehmens ab.",
      "Automatisierungen greifen nur an klar definierten Prozesspunkten ein.",
    ],
  },
};

export default projectSolutions;