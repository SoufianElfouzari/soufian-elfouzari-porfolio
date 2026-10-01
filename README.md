# Persönliche Website von Soufian El-Fouzari

## 1. Projektziel

Diese Website ist die zentrale professionelle Präsenz von Soufian El-Fouzari. Sie soll nicht wie eine gewöhnliche Freelancer-Landingpage und nicht wie ein digitalisierter Standard-Lebenslauf wirken. Sie verbindet Persönlichkeit, technisches Können, Projekterfahrung, Dienstleistungen und beruflichen Werdegang in einer klaren, hochwertigen Website.

Die Website richtet sich an drei Zielgruppen:

1. Unternehmen und Selbstständige, die ein digitales Projekt umsetzen lassen möchten
2. Recruiter und Arbeitgeber, die einen starken Fullstack Developer suchen
3. Potenzielle Partner, die an einer langfristigen Zusammenarbeit interessiert sind

Nach dem Besuch sollen Nutzer überzeugt sein, dass Soufian:

- technisch anspruchsvolle Produkte entwickeln kann
- Frontend, Backend und Geschäftsanforderungen zusammen versteht
- reale Projekte eigenständig bis zur Veröffentlichung umsetzt
- professionell kommuniziert und Verantwortung übernimmt
- sowohl für Kundenprojekte als auch für eine Festanstellung interessant ist

Die Kompetenz wird nicht durch Eigenlob vermittelt. Sie wird durch Fallstudien, konkrete Verantwortungsbereiche, technische Entscheidungen, echte Ergebnisse und eine hochwertige Umsetzung der Website bewiesen.

## 2. Umfang der Website

Die Website besteht aus sechs Hauptseiten und dynamischen Projektdetailseiten.

### Hauptnavigation

1. Startseite
2. Projekte
3. Leistungen
4. Über mich
5. Lebenslauf
6. Kontakt

### Zusätzliche Seiten

- Projektdetailseite für jedes ausgewählte Projekt
- Impressum
- Datenschutz
- Eigene 404-Seite

Die Projektdetailseiten erscheinen nicht als eigene Punkte in der Hauptnavigation. Sie werden über die Projektübersicht und ausgewählte Projekte auf anderen Seiten geöffnet.

### Vorgesehene Routen

| Seite | Route |
| --- | --- |
| Startseite | `/` |
| Projekte | `/projekte` |
| Projektdetail | `/projekte/:slug` |
| Leistungen | `/leistungen` |
| Über mich | `/ueber-mich` |
| Lebenslauf | `/lebenslauf` |
| Kontakt | `/kontakt` |
| Impressum | `/impressum` |
| Datenschutz | `/datenschutz` |
| 404-Seite | `*` |

## 3. Globale Grundsätze

### Positionierung

Die Website zeigt Soufian als Fullstack Developer mit technischem Verständnis, Produktdenken und unternehmerischer Erfahrung. Die Sprache richtet sich am Nutzen für Unternehmen aus, ohne technische Tiefe zu verlieren.

Eine mögliche zentrale Aussage ist:

> Ich entwickle digitale Produkte, die technisch stark sind und in der echten Welt funktionieren.

Mögliche ergänzende Beschreibung:

> Fullstack Developer für individuelle Websites, Webanwendungen, Portale und Automatisierungen. Von der ersten Idee bis zum fertigen Produkt.

Diese Texte sind eine inhaltliche Richtung und können vor der Umsetzung noch final überarbeitet werden.

### Tonalität

- selbstbewusst, aber nicht überheblich
- persönlich, aber professionell
- verständlich für Kunden und technisch glaubwürdig für Entwickler
- konkret statt voller Werbefloskeln
- kurze Absätze und klare Aussagen
- Ergebnisse und Verantwortung statt leerer Superlative

### Inhaltliche Regeln

- Keine erfundenen Kennzahlen oder Ergebnisse
- Keine Skill-Prozentbalken wie „React 95 Prozent“
- Keine endlose Sammlung von Technologie-Logos
- Keine austauschbaren Aussagen wie „Ich liebe es, Code zu schreiben“
- Nur Projekte zeigen, die den professionellen Eindruck stärken
- Bei Kundenprojekten vertrauliche Informationen und Zugänge entfernen
- Nicht nur aufzählen, was gebaut wurde, sondern auch warum und mit welchem Ergebnis

### Designrichtung

Die Website soll wie die persönliche Marke eines jungen technischen Gründers wirken.

- hochwertig und ruhig
- klare Typografie
- viel kontrollierter Freiraum
- starke Projektbilder
- dezente Animationen mit erkennbarem Zweck
- professionelles persönliches Foto
- keine typische Hacker-Optik
- keine übertriebene Neon- oder Code-Ästhetik
- auf Mobilgeräten genauso überzeugend wie auf Desktop

### Hauptaktionen

Auf der gesamten Website gibt es drei wiederkehrende Handlungen:

1. Projekte ansehen
2. Projekt oder Zusammenarbeit anfragen
3. Lebenslauf ansehen oder herunterladen

Jede Seite besitzt eine klare Hauptaktion. Es sollen nicht in jedem Abschnitt mehrere gleich starke Buttons miteinander konkurrieren.

## 4. Globale Komponenten

### Header

Der Header ist auf allen Hauptseiten und Projektdetailseiten identisch.

Inhalte:

- persönliche Wortmarke oder Name „Soufian El-Fouzari“
- Navigation zu Projekte, Leistungen, Über mich, Lebenslauf und Kontakt
- hervorgehobener Button „Projekt anfragen“
- mobile Menüschaltfläche
- optionaler Sprachwechsel erst in einer späteren Version

Verhalten:

- beim Laden transparent oder ruhig in den Seitenanfang integriert
- beim Scrollen kompakt und gut lesbar
- aktive Seite wird dezent markiert
- auf Mobilgeräten öffnet sich ein übersichtliches Vollbild- oder Seitenmenü
- der Button „Projekt anfragen“ führt zu `/kontakt?typ=projekt`

### Footer

Der Footer ist kompakt und auf allen Seiten identisch.

Inhalte:

- Name und kurze berufliche Bezeichnung
- kurzer Satz zur Verfügbarkeit für Projekte und Jobangebote
- Schnelllinks zu allen Hauptseiten
- E-Mail-Adresse
- professionelle externe Profile, sofern aktiv gepflegt
- Impressum und Datenschutz
- Copyright mit dynamischem Jahr

Der Footer soll keine zweite vollständige Startseite sein. Er dient der Orientierung und bietet eine letzte Kontaktmöglichkeit.

## 5. Startseite

**Route:** `/`

**Ziel:** Innerhalb weniger Sekunden erklären, wer Soufian ist, was er kann und wohin verschiedene Besucher als Nächstes gehen sollen.

### 5.1 Header

- globale Wortmarke
- Hauptnavigation
- hervorgehobener Button „Projekt anfragen“
- die Startseite selbst muss nicht zusätzlich als Navigationspunkt erscheinen, wenn die Wortmarke zur Startseite führt

### 5.2 Hero

Der Hero zeigt Persönlichkeit und Positionierung sofort.

Inhalte:

- kleine Einordnung wie „Fullstack Developer und digitaler Produktentwickler“
- starke Hauptüberschrift mit konkretem Nutzen
- kurze Erklärung mit Frontend, Backend, Produktdenken und eigenständiger Umsetzung
- professionelles Foto oder eine hochwertige visuelle Darstellung von Soufian
- primärer Button „Projekte ansehen“
- sekundärer Button „Mit mir arbeiten“
- kleiner Textlink „Lebenslauf ansehen“ für Recruiter

Der Hero darf nicht mit langen Technologie-Listen beginnen. Erst muss verständlich werden, welchen Wert Soufian bietet.

### 5.3 Vertrauensleiste

Eine kompakte Reihe mit echten Kompetenzsignalen.

Mögliche Inhalte:

- reale Kundenprojekte
- Fullstack-Entwicklung
- eigenständige Produktumsetzung
- E-Commerce- und Geschäftserfahrung
- Web, Mobile und Automatisierung

Zahlen werden nur verwendet, wenn sie aktuell und nachweisbar sind.

### 5.4 Ausgewählte Projekte

Dieser Abschnitt zeigt drei besonders starke Projekte. Empfohlene Auswahl:

- Kassel Reels
- Future Front
- Shaykh Sayed

Alternativ kann später ein stärkeres Projekt eines davon ersetzen.

Jede Projektkarte enthält:

- aussagekräftiges Bild oder Mockup
- Projektname
- Projektkategorie
- kurze Beschreibung des Problems und der Lösung
- Soufians Rolle
- wichtigste eingesetzte Technologien
- Link „Fallstudie ansehen“

Der Abschnitt endet mit „Alle Projekte ansehen“.

### 5.5 Kompetenzbereiche

Die Fähigkeiten werden nach gelösten Aufgaben gruppiert, nicht als unstrukturierte Logo-Wand.

Vier empfohlene Kategorien:

1. Frontend und Benutzeroberflächen
2. Backend und APIs
3. Portale, SaaS und mobile Anwendungen
4. Automatisierungen und Integrationen

Jede Kategorie enthält:

- kurze Beschreibung der Kompetenz
- konkrete Beispiele aus Projekten
- kleine Auswahl relevanter Technologien

### 5.6 Über-mich-Vorschau

Kurzer persönlicher Abschnitt mit Foto.

Inhalte:

- wer Soufian ist
- wie früh er praktische Berufserfahrung gesammelt hat
- Verbindung aus Entwicklung, E-Commerce und unternehmerischem Denken
- Arbeitsweise und Verantwortungsbewusstsein
- Link „Mehr über mich“

Dieser Abschnitt erzählt nur die Kurzfassung. Die vollständige Geschichte gehört auf die Seite „Über mich“.


### 5.8 Beruflicher Kurzverlauf

Eine sehr kurze Timeline mit höchstens drei bis vier wichtigen Stationen.

Inhalte können sein:

- Einstieg in E-Commerce und digitale Arbeit
- Entwicklung zum Fullstack Developer
- Verantwortung für reale Kunden- und Unternehmensprojekte
- heutige selbstständige Projektarbeit

Die vollständigen Daten und Aufgaben stehen auf der Lebenslaufseite.

### 5.9 Abschluss-CTA

Ein klarer gemeinsamer Abschluss für Kunden und Recruiter.

Hauptaussage:

> Sie haben ein Projekt, eine Position oder eine Idee, bei der ich helfen kann?

Buttons:

- „Kontakt aufnehmen“
- optional als Textlink „Lebenslauf ansehen“

### 5.10 Footer

- globale Footer-Inhalte
- Kontaktmöglichkeit
- Navigation
- rechtliche Links

## 6. Projekte

**Route:** `/projekte`

**Ziel:** Die technische und geschäftliche Kompetenz anhand echter Arbeiten beweisen.

### 6.1 Header

- globaler Header
- Navigationspunkt „Projekte“ ist aktiv
- Button „Projekt anfragen“ bleibt sichtbar

### 6.2 Seiten-Hero

Inhalte:

- Seitentitel „Ausgewählte Projekte“
- kurze Erklärung, dass jedes Projekt ein reales Problem, die eigene Rolle und die technische Lösung zeigt
- kein großes persönliches Foto, damit die Arbeiten im Mittelpunkt stehen

### 6.3 Projektfilter

Filter nur einbauen, wenn ausreichend Projekte vorhanden sind. Bei weniger als sechs Projekten ist kein Filter notwendig.

Mögliche spätere Kategorien:

- Alle
- Websites
- Webanwendungen und Portale
- Mobile Anwendungen
- Automatisierungen

### 6.4 Projektübersicht

Großzügiges Raster mit etwa vier bis sechs hochwertigen Projekten.

Mögliche erste Projekte:

- HubPoint24
- Kassel Reels
- Kassel Immo
- Kassel Jobs
- Future Front
- Shaykh Sayed Website und App
- Shaykh Sayed App
- Kassel Reels Portal

Jede Karte enthält:

- Titelbild
- Name
- Kategorie
- Problem in einem kurzen Satz
- Lösung in einem kurzen Satz
- eigene Rolle
- drei bis fünf Kerntechnologien
- Projektstatus, falls relevant
- Link zur Fallstudie
- Link zur Live-Seite nur, wenn sie öffentlich und vorzeigbar ist

### 6.5 Arbeitsweise hinter den Projekten

Ein kurzer Abschnitt erklärt, dass Soufian nicht nur einzelne Oberflächen baut, sondern Anforderungen versteht, Systeme plant, entwickelt, testet und veröffentlicht.

Maximal vier Schritte:

1. Problem verstehen
2. Lösung und Architektur planen
3. Produkt entwickeln und testen
4. Veröffentlichen und weiterentwickeln

### 6.6 Abschluss-CTA

Hauptaussage:

> Sie möchten ein ähnliches Produkt entwickeln oder mein Können in Ihrem Team einsetzen?

Buttons:

- „Projekt besprechen“
- „Jobangebot senden“ als dezenter zweiter Link

### 6.7 Footer

- globale Footer-Inhalte
- Kontakt und rechtliche Links

## 7. Projektdetailseite

**Route:** `/projekte/:slug`

**Ziel:** Eine konkrete Arbeit so detailliert erklären, dass Kunden und Recruiter die tatsächliche Tiefe der Leistung beurteilen können.

Jedes Projekt verwendet dieselbe Grundstruktur. Nicht relevante Blöcke können bei einem einzelnen Projekt entfallen.

### 7.1 Header

- globaler Header
- Navigationspunkt „Projekte“ bleibt aktiv
- Button „Projekt anfragen“

### 7.2 Projekt-Hero

Inhalte:

- Projektname
- Projektkategorie
- kurze Ergebnisbeschreibung
- großes Hauptbild oder Geräte-Mockup
- Projektstatus
- Rolle von Soufian
- Zeitraum
- Live-Link, wenn öffentlich verfügbar

### 7.3 Projektüberblick

Kompakte Faktenübersicht:

| Kategorie | Inhalt |
| --- | --- |
| Auftrag oder Kontext | Kunde, internes Produkt oder eigenes Projekt |
| Rolle | zum Beispiel Fullstack-Entwicklung und Produktumsetzung |
| Verantwortungsbereiche | konkrete Bereiche statt allgemeiner Bezeichnung |
| Plattform | Web, Mobile oder beides |
| Technologien | wichtigste eingesetzte Werkzeuge |
| Status | live, in Entwicklung oder abgeschlossen |

Vertrauliche Kundendaten werden nicht veröffentlicht.

### 7.5 Aufgabe und Verantwortung

Konkrete Darstellung der eigenen Rolle:

- welche Entscheidungen Soufian selbst getroffen hat
- welche Teile er entwickelt hat
- ob er Frontend, Backend, Datenmodell, Infrastruktur oder Produktlogik verantwortet hat
- mit wem er zusammengearbeitet hat

Dieser Abschnitt ist besonders wichtig für Recruiter, da er den tatsächlichen Anteil am Projekt sichtbar macht.

### 7.6 Lösung

Erklärung der entwickelten Lösung aus Nutzersicht.

Inhalte:

- zentrale Funktionen
- Nutzerablauf
- geschäftlicher Nutzen
- wichtige Entscheidungen im Produkt

Die Erklärung soll auch ohne tiefes technisches Wissen verständlich sein.

### 7.7 Produktansichten

Eine kleine Galerie mit sorgfältig ausgewählten Bildern:

- zentrale Desktop-Ansicht
- mobile Ansicht
- Dashboard oder wichtige Funktion
- besonderer Nutzerablauf

Jedes Bild erhält eine kurze Bildunterschrift, die erklärt, was daran relevant ist.

### 7.8 Technische Umsetzung

Technische Erklärung für Recruiter, Entwickler und technisch interessierte Kunden.

Mögliche Kategorien:

- Frontend
- Backend
- Datenbank und Datenmodell
- Authentifizierung und Berechtigungen
- APIs und Integrationen
- Hosting und Veröffentlichung
- Sicherheit und Datenschutz

Nur die Bereiche aufführen, die im jeweiligen Projekt tatsächlich relevant sind.

### 7.9 Herausforderung und Entscheidung

Ein bis zwei anspruchsvolle Situationen werden konkret beschrieben:

- Was war schwierig?
- Welche Möglichkeiten gab es?
- Warum wurde eine bestimmte Lösung gewählt?
- Was wurde daraus gelernt oder verbessert?

Dieser Abschnitt beweist Problemlösungskompetenz stärker als eine reine Technologieliste.

### 7.10 Ergebnis

Inhalte:

- welche Funktionen erfolgreich umgesetzt wurden
- welchen Zustand das Projekt heute hat
- welche Verbesserung für Nutzer oder Unternehmen erreicht wurde
- echte Kennzahlen nur, wenn sie verfügbar und freigegeben sind

Bei laufenden Projekten wird klar zwischen bereits umgesetzt und geplant unterschieden.

### 7.11 Verwendete Technologien

Kompakte Liste mit den wichtigsten Technologien und jeweils ihrem Zweck im Projekt. Nicht jedes installierte Paket muss genannt werden.

### 7.12 Nächstes Projekt

Am Ende wird eine weitere passende Fallstudie empfohlen. So bleibt der Besucher im Portfolio und sieht mehrere Kompetenzbereiche.

### 7.13 Abschluss-CTA

Hauptaussage:

> Sie planen ein ähnliches Projekt oder suchen diese Erfahrung für Ihr Team?

Buttons:

- „Projekt anfragen“
- „Kontakt aufnehmen“

### 7.14 Footer

- globale Footer-Inhalte
- Navigation und rechtliche Links

## 8. Leistungen

**Route:** `/leistungen`

**Ziel:** Potenziellen Kunden verständlich zeigen, wobei Soufian helfen kann und was eine Zusammenarbeit bringt.

### 8.1 Header

- globaler Header
- Navigationspunkt „Leistungen“ ist aktiv
- Button „Projekt anfragen“

### 8.2 Seiten-Hero

Inhalte:

- klare Überschrift wie „Digitale Produkte von der Idee bis zur Veröffentlichung“
- kurze Erklärung der Verbindung aus Beratung, Entwicklung und technischer Umsetzung
- Button „Projekt besprechen“

### 8.3 Leistungsübersicht

Vier Hauptleistungen reichen für die erste Version.

#### 1. Websites und Landingpages

- individuelle Unternehmenswebsites
- schnelle und responsive Umsetzung
- klare Nutzerführung
- Kontakt-, Buchungs- oder Anfragefunktionen
- technische Veröffentlichung

#### 2. Webanwendungen und Portale

- interne Tools
- Kundenportale
- Dashboards
- Rollen und Berechtigungen
- individuelle Geschäftslogik

#### 3. SaaS und digitale Produkte

- technische Produktplanung
- Benutzerkonten und Abonnements, wenn benötigt
- Datenmodelle und APIs
- skalierbare Produktgrundlage
- Weiterentwicklung bestehender MVPs

#### 4. Automatisierungen und Integrationen

- Verbindung bestehender Systeme
- APIs und Webhooks
- automatisierte Datenübertragung
- Reduzierung wiederkehrender manueller Arbeit
- individuelle Abläufe statt isolierter Werkzeuge

Jede Leistung enthält:

- typisches Problem
- passende Lösung
- mögliches Ergebnis
- Link zu einem relevanten Projekt
- Button „Diese Leistung anfragen“

### 8.4 Was eine Zusammenarbeit auszeichnet

Kompakter Abschnitt mit vier Punkten:

- direkter persönlicher Ansprechpartner
- technisches und geschäftliches Verständnis
- transparente Kommunikation
- Verantwortung bis zur funktionierenden Veröffentlichung

Keine unrealistischen Versprechen wie garantierte Umsätze oder immer fehlerfreie Systeme.

### 8.5 Ablauf der Zusammenarbeit

Fünf verständliche Schritte:

1. Unverbindliche Anfrage
2. Anforderungen und Ziel klären
3. Konzept, Umfang und Angebot
4. Entwicklung mit regelmäßigen Zwischenständen
5. Prüfung, Veröffentlichung und Übergabe

Optionale Betreuung nach der Veröffentlichung wird als Ergänzung genannt, nicht automatisch versprochen.

### 8.6 Häufige Fragen

Maximal fünf relevante Fragen:

- Welche Projekte übernimmt Soufian?
- Arbeitet er mit bestehenden Teams oder Agenturen zusammen?
- Kann ein bestehendes System weiterentwickelt werden?
- Wie beginnt eine Zusammenarbeit?
- Ist eine langfristige technische Betreuung möglich?

Preise werden nur genannt, wenn ein klares und dauerhaftes Preismodell festgelegt ist. Sonst wird erklärt, dass Umfang und Anforderungen den Preis bestimmen.

### 8.7 Abschluss-CTA

Hauptaussage:

> Beschreiben Sie kurz Ihr Vorhaben. Sie erhalten eine ehrliche Einschätzung zum nächsten sinnvollen Schritt.

Button:

- „Projekt anfragen“

### 8.8 Footer

- globale Footer-Inhalte
- Kontakt und rechtliche Links

## 9. Über mich

**Route:** `/ueber-mich`

**Ziel:** Soufian als Person, Entwickler und verantwortungsvollen Partner zeigen.

### 9.1 Header

- globaler Header
- Navigationspunkt „Über mich“ ist aktiv
- Button „Projekt anfragen“

### 9.2 Persönlicher Hero

Inhalte:

- großes professionelles Foto
- Name und berufliche Rolle
- kurze persönliche Aussage über Anspruch und Arbeitsweise
- keine Wiederholung des vollständigen Startseiten-Heros

### 9.3 Meine Geschichte

Eine kompakte, ehrliche Erzählung:

- früher Einstieg in die Arbeitswelt
- Erfahrung im E-Commerce und mit digitalen Geschäftsprozessen
- Entwicklung in Richtung Fullstack und technische Verantwortung
- Arbeit an echten Produkten und Kundenprojekten
- heutige Verbindung aus Entwicklung und unternehmerischem Denken

Die Geschichte soll nicht wie eine Rechtfertigung für Alter oder Bildungsweg wirken. Sie zeigt praktische Entwicklung, Eigeninitiative und Verantwortung.

### 9.4 So denke ich über Produkte

Drei Grundsätze:

1. Technik muss ein echtes Problem lösen
2. Eine gute Oberfläche und eine saubere technische Grundlage gehören zusammen
3. Ein Produkt ist erst wertvoll, wenn Menschen es zuverlässig nutzen können

Zu jedem Grundsatz gibt es ein kurzes konkretes Beispiel aus der eigenen Arbeit.

### 9.5 So arbeite ich

Inhalte:

- Anforderungen verstehen, bevor entwickelt wird
- komplexe Aufgaben in klare Schritte zerlegen
- Entscheidungen verständlich erklären
- Zwischenstände früh zeigen
- Verantwortung für Qualität und Abschluss übernehmen

### 9.6 Persönliche Werte

Eine kurze, echte Darstellung der Werte, die die Zusammenarbeit prägen:

- Ehrlichkeit
- Zuverlässigkeit
- Verantwortungsbewusstsein
- kontinuierliches Lernen
- respektvolle Zusammenarbeit

Der Abschnitt bleibt persönlich, ohne private Details unnötig offenzulegen.

### 9.7 Außerhalb des Codes

Optionaler kompakter Abschnitt, der Soufian menschlicher macht. Mögliche Inhalte:

- Lernen und Wissensvermittlung
- Aufbau eigener Projekte
- Interesse an Unternehmen und digitalen Produkten

Nur Dinge nennen, die öffentlich gezeigt werden sollen und zur professionellen Persönlichkeit passen.

### 9.8 Verweise auf relevante Inhalte

Zwei klare Wege:

- „Meinen Lebenslauf ansehen“
- „Meine Projekte ansehen“

### 9.9 Abschluss-CTA

Hauptaussage:

> Sie möchten mit mir arbeiten oder mich für Ihr Team kennenlernen?

Button:

- „Kontakt aufnehmen“

### 9.10 Footer

- globale Footer-Inhalte
- Kontakt und rechtliche Links

## 10. Lebenslauf

**Route:** `/lebenslauf`

**Ziel:** Recruitern und Arbeitgebern alle entscheidenden beruflichen Informationen schnell, klar und glaubwürdig zugänglich machen.

### 10.1 Header

- globaler Header
- Navigationspunkt „Lebenslauf“ ist aktiv
- Button kann auf dieser Seite „Kontakt aufnehmen“ lauten

### 10.2 Lebenslauf-Hero

Inhalte:

- Name
- Zielrolle, zum Beispiel „Fullstack Developer“
- kurzes berufliches Profil in zwei bis drei Sätzen
- Standort und gewünschtes Arbeitsmodell, sobald final festgelegt
- Button „Lebenslauf als PDF herunterladen“
- Button „Jobangebot senden“

### 10.3 Kurzprofil

Kompakte Zusammenfassung:

- Verbindung aus Frontend, Backend und Produktverständnis
- praktische Erfahrung mit realen Unternehmensprojekten
- selbstständige Umsetzung und technische Verantwortung
- E-Commerce- und Geschäftserfahrung als zusätzlicher Vorteil

### 10.4 Berufserfahrung

Chronologische Timeline, neueste Station zuerst.

Jede Station enthält:

- Position
- Unternehmen oder Art der Selbstständigkeit
- Ort oder Remote
- Zeitraum
- kurze Einordnung
- drei bis fünf konkrete Aufgaben oder Erfolge
- verwendete Technologien nur, wenn sie für die Station relevant sind

Aufgaben sollen konkret formuliert sein, zum Beispiel:

- Entwicklung einer bestimmten Anwendung
- Verantwortung für Frontend und Backend
- Umsetzung einer Integration
- Verbesserung eines Ablaufs
- Zusammenarbeit mit Kunden oder internen Fachbereichen

Alle Arbeitgeber, Zeiträume und Rollen müssen vor Veröffentlichung exakt geprüft werden.

### 10.5 Ausgewählte Projekterfahrung

Drei kompakte Projekte als Ergänzung zur Berufserfahrung.

Jeder Eintrag enthält:

- Projektname
- Rolle
- Kernaufgabe
- wichtigste technische Leistung
- Link zur Fallstudie

### 10.6 Technische Fähigkeiten

Nach Bereichen gegliedert:

| Bereich | Mögliche Inhalte |
| --- | --- |
| Frontend | React, JavaScript, HTML, CSS, responsive Entwicklung |
| Backend | Python, Flask, APIs, Authentifizierung, Geschäftslogik |
| Anwendungen | Flutter, Webportale, Dashboards, SaaS |
| Daten und Dienste | Supabase, Appwrite, Datenmodelle, Integrationen |
| Werkzeuge und Betrieb | Git, Deployment, Hosting, Debugging |
| Geschäft | E-Commerce, Anforderungsanalyse, Kundenkommunikation, Produktdenken |

Nur tatsächlich beherrschte und eingesetzte Fähigkeiten werden aufgenommen.

Optional kann pro Technologie eine sachliche Einordnung verwendet werden:

- regelmäßig in Projekten eingesetzt
- praktisch eingesetzt
- Grundkenntnisse

Keine Prozentangaben und keine künstlichen Sternebewertungen.

### 10.7 Ausbildung und Weiterbildung

Inhalte:

- schulischer Abschluss
- begonnene oder abgeschlossene berufliche Ausbildung mit korrektem Status
- relevante Weiterbildungen
- Zertifikate, sofern vorhanden und aussagekräftig
- selbstständiges Lernen nur mit konkretem Schwerpunkt beschreiben

### 10.8 Sprachen

Sprachen mit ehrlicher Einordnung, zum Beispiel:

- Muttersprache
- fließend
- gute Kenntnisse
- Grundkenntnisse

### 10.9 Verfügbarkeit und Rahmen

Dieser Block wird leicht aktualisierbar aufgebaut.

Mögliche Angaben:

- offen für Festanstellung, Freelancer-Projekte oder beides
- bevorzugte Rollen
- Remote, Hybrid oder vor Ort
- möglicher Starttermin
- Reisebereitschaft oder Umzugsbereitschaft nur, wenn relevant

### 10.10 PDF-Lebenslauf

Der herunterladbare PDF-Lebenslauf:

- enthält dieselben Kerndaten wie die Website
- ist klar auf ein bis zwei Seiten begrenzt
- besitzt ein professionelles Dateiformat und einen eindeutigen Dateinamen
- wird bei jeder wichtigen Änderung gemeinsam mit der Webversion aktualisiert

Empfohlener Dateiname:

`Soufian-El-Fouzari-Lebenslauf.pdf`

### 10.11 Abschluss-CTA

Hauptaussage:

> Sie möchten meine Erfahrung in Ihrem Team einsetzen?

Buttons:

- „Jobangebot senden“
- „Projekte ansehen“

### 10.12 Footer

- globale Footer-Inhalte
- Kontakt und rechtliche Links

## 11. Kontakt

**Route:** `/kontakt`

**Ziel:** Projektanfragen, Jobangebote und Kooperationsanfragen ohne unnötige Hürden erfassen.

### 11.1 Header

- globaler Header
- Navigationspunkt „Kontakt“ ist aktiv
- kein zusätzlicher konkurrierender Anfragebutton notwendig

### 11.2 Kontakt-Hero

Inhalte:

- klare Überschrift wie „Lassen Sie uns über Ihr Vorhaben sprechen“
- kurze Erklärung, welche Arten von Anfragen willkommen sind
- realistische Angabe zur üblichen Antwortzeit nur, wenn sie zuverlässig eingehalten werden kann

### 11.3 Auswahl der Anfrageart

Der Nutzer wählt zuerst eine Kategorie:

1. Projektanfrage
2. Jobangebot
3. Zusammenarbeit oder Partnerschaft
4. Sonstige Anfrage

Abhängig von der Auswahl erscheinen passende Felder. Dadurch bleibt das Formular kompakt.

### 11.4 Allgemeine Formularfelder

- Name
- E-Mail-Adresse
- Unternehmen, optional
- Art der Anfrage
- Nachricht
- Zustimmung zur Datenschutzerklärung

### 11.5 Zusätzliche Felder für Projektanfragen

- Art des Projekts
- aktueller Stand
- gewünschter Zeitraum
- Budgetrahmen, optional oder als Auswahl
- vorhandene Website oder Unterlagen, optional

### 11.6 Zusätzliche Felder für Jobangebote

- Unternehmen
- Position
- Beschäftigungsart
- Arbeitsmodell
- Standort
- gewünschter Starttermin
- Link zur Stellenbeschreibung, optional

### 11.7 Zusätzliche Felder für Zusammenarbeit

- Art der Zusammenarbeit
- Organisation oder Person
- Ziel der Zusammenarbeit
- gewünschter Zeitraum

### 11.8 Formularzustände

Das Formular braucht klare Zustände:

- Ausgangszustand
- Prüfung fehlerhafter oder fehlender Eingaben
- Versand läuft
- erfolgreich versendet
- Fehler beim Versand mit alternativer E-Mail-Möglichkeit

Nach erfolgreichem Versand wird erklärt, was als Nächstes passiert. Doppelte Übermittlungen werden verhindert.

### 11.9 Direkter Kontakt

Neben dem Formular steht eine direkte E-Mail-Adresse. Weitere Kontaktwege werden nur ergänzt, wenn sie professionell genutzt und regelmäßig geprüft werden.

### 11.10 Kurze Erwartungsklärung

Ein kleiner Abschnitt erklärt:

- welche Informationen eine gute Anfrage enthalten sollte
- dass eine erste Anfrage unverbindlich ist
- dass Projektumfang und Verfügbarkeit vor einer Zusage geprüft werden

### 11.11 Footer

- globale Footer-Inhalte
- rechtliche Links
- keine erneute große Kontaktaufforderung, da die Seite selbst bereits der Kontaktweg ist

## 12. Rechtliche Seiten

### 12.1 Impressum

**Route:** `/impressum`

Struktur:

1. reduzierter globaler Header
2. Seitentitel
3. gesetzlich erforderliche Angaben
4. Kontaktangaben
5. weitere rechtlich erforderliche Informationen
6. globaler Footer

Die finalen Inhalte müssen anhand der tatsächlichen Unternehmensform, Anschrift und Tätigkeit korrekt erstellt oder rechtlich geprüft werden.

### 12.2 Datenschutz

**Route:** `/datenschutz`

Struktur:

1. reduzierter globaler Header
2. Seitentitel
3. Verantwortlicher
4. Hosting und technische Protokolldaten
5. Kontaktformular
6. eingesetzte externe Dienste
7. Cookies und Analyse nur, falls tatsächlich eingesetzt
8. Rechte betroffener Personen
9. Stand der Datenschutzerklärung
10. globaler Footer

Die Datenschutzerklärung muss zur tatsächlichen technischen Umsetzung passen. Nicht eingesetzte Dienste werden nicht vorsorglich aufgelistet.

## 13. 404-Seite

**Route:** `*`

Struktur:

1. reduzierter Header
2. kurze verständliche Fehlermeldung
3. Button zur Startseite
4. Link zu den Projekten
5. kompakter Footer

Die Seite soll zum restlichen Design passen und den Nutzer schnell zurückführen.

## 14. Projektinhalte für die erste Version

Für die erste Veröffentlichung sollten nicht alle denkbaren Inhalte fertig sein. Entscheidend ist eine starke, vollständige Grundversion.

### Pflichtinhalte

- professionelles Hauptfoto
- finale Positionierung und Hero-Texte
- mindestens drei vollständige Projektkarten
- mindestens zwei wirklich detaillierte Fallstudien
- vier klar erklärte Leistungen
- persönliche Kurzgeschichte
- vollständige und geprüfte Berufserfahrung
- technische Fähigkeiten
- Kontaktformular
- PDF-Lebenslauf
- Impressum und Datenschutz

### Spätere Erweiterungen

- weitere Fallstudien
- englische Version
- Kundenstimmen mit ausdrücklicher Freigabe
- Artikel oder technische Einblicke
- Terminbuchung
- detailliertere Kennzahlen zu Projekten

Ein Blog ist für die erste Version nicht notwendig. Er würde die Website vergrößern und erfordert dauerhaft gepflegte Inhalte.

## 15. Empfohlene Projektstruktur im Code

Die genaue Struktur kann an das eingesetzte Framework angepasst werden.

```text
src/
  assets/
    images/
    icons/
  components/
    layout/
      Header
      Footer
      PageContainer
    common/
      Button
      SectionHeading
      ProjectCard
      TechnologyList
      CallToAction
  data/
    projects
    experience
    skills
    services
  pages/
    Home
    Projects
    ProjectDetails
    Services
    About
    Resume
    Contact
    Imprint
    Privacy
    NotFound
  routes/
  styles/
  utils/
```

Wiederkehrende Inhalte wie Projekte, Berufserfahrung, Skills und Leistungen sollen datenbasiert gepflegt werden. Dadurch werden dieselben Informationen auf Startseite, Projektseite und Lebenslauf nicht mehrfach manuell geschrieben.

## 16. Qualitätsanforderungen

### Benutzererlebnis

- klare Navigation
- sichtbare Fokuszustände
- vollständig per Tastatur bedienbar
- verständliche Formulare und Fehlermeldungen
- keine störenden Animationen
- keine unerwarteten Layoutsprünge

### Responsive Design

- Mobile First oder mindestens gleichwertige mobile Umsetzung
- Projektbilder auf kleinen Bildschirmen gut erkennbar
- Navigation ohne überfüllte Menüs
- Buttons mit ausreichend großer Berührungsfläche
- keine horizontalen Überläufe

### Leistung

- optimierte Bilder
- moderne Bildformate
- sinnvolles Lazy Loading
- begrenzte Anzahl externer Skripte
- schnelle erste Darstellung
- Animationen ohne unnötige Leistungskosten

### Barrierefreiheit

- semantische Überschriftenstruktur
- ausreichende Farbkontraste
- Alternativtexte für relevante Bilder
- beschriftete Formularfelder
- Statusmeldungen für Formulare
- Unterstützung reduzierter Bewegungen

### SEO und Darstellung beim Teilen

Jede Seite benötigt:

- individuellen Seitentitel
- eigene Meta-Beschreibung
- Canonical URL
- Open-Graph-Titel und Beschreibung
- passendes Vorschaubild
- korrekte Überschriftenstruktur

Zusätzlich:

- strukturierte Daten für Person und Website, sofern korrekt umgesetzt
- Sitemap
- robots.txt
- aussagekräftige URLs
- eigenes Favicon

### Datenschutz und Sicherheit

- Formulare serverseitig validieren
- Spam-Schutz möglichst datenschutzfreundlich umsetzen
- keine geheimen Schlüssel im Frontend
- nur notwendige Daten erfassen
- keine Analyse- oder Marketingdienste ohne bewusste Entscheidung
- Abhängigkeiten und Zugriffsregeln regelmäßig prüfen

## 17. Reihenfolge der Umsetzung

1. Positionierung, Inhalte und visuelle Richtung festlegen
2. globale Gestaltung, Header und Footer entwickeln
3. Startseite umsetzen
4. Projektübersicht und Projektdetail-Template erstellen
5. erste zwei bis drei Fallstudien ausarbeiten
6. Leistungen und Über-mich-Seite umsetzen
7. Lebenslaufseite und PDF-Lebenslauf erstellen
8. Kontaktformular technisch anbinden
9. rechtliche Seiten ergänzen
10. Responsive Design, Barrierefreiheit, SEO und Leistung prüfen
11. Inhalte und alle beruflichen Angaben final kontrollieren
12. veröffentlichen und auf echten Geräten testen

## 18. Definition der ersten fertigen Version

Die erste Version gilt als fertig, wenn:

- alle sechs Hauptseiten vollständig erreichbar sind
- die Navigation auf Desktop und Mobilgeräten funktioniert
- mindestens zwei überzeugende Fallstudien vorhanden sind
- jede sichtbare Behauptung korrekt und belegbar ist
- Recruiter den Lebenslauf online lesen und als PDF herunterladen können
- Kunden eine passende Projektanfrage senden können
- alle Formulare verständliche Erfolgs- und Fehlerzustände besitzen
- Impressum und Datenschutz vorhanden und technisch passend sind
- es keine Platzhaltertexte, leeren Links oder unfertigen Abschnitte gibt
- die Website auf aktuellen Desktop- und Mobilbrowsern geprüft wurde

Die Website soll mit einer kleinen Anzahl sehr starker Inhalte starten. Weitere Projekte und Funktionen werden erst ergänzt, wenn sie den professionellen Eindruck tatsächlich verbessern.
