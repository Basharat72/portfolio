/* =========================================================================
   translations.ts — every visible string of the site in English and German.
   Edit text here; components and layout never need to change for copy edits.
   ========================================================================= */

export type Lang = "en" | "de";

const en = {
  "meta.title": "Basharat Mubashir Ahmed — Data Analyst & AI Engineer",
  "meta.desc":
    "Data analyst and AI engineer in Germany — forecasting models, anomaly detection, LLM-based systems and dashboards people actually use. Currently at Hyundai Motor Deutschland.",

  "a11y.skip": "Skip to content",

  "nav.top": "Top",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.experience": "Experience",
  "nav.projects": "Work",
  "nav.contact": "Contact",
  "nav.langAria": "Switch language",
  "nav.themeAria": "Toggle light / dark mode",
  "nav.menuAria": "Open menu",
  "nav.dotsAria": "Quick navigation",

  "palette.open": "Search & jump anywhere",
  "palette.placeholder": "Search sections and actions…",
  "palette.sections": "Sections",
  "palette.actions": "Actions",
  "palette.toDark": "Switch to dark mode",
  "palette.toLight": "Switch to light mode",
  "palette.toEn": "Switch to English",
  "palette.toDe": "Zur deutschen Version wechseln",
  "palette.copyEmail": "Copy email address",
  "palette.copied": "Email copied",
  "palette.email": "Write an email",
  "palette.empty": "No matches",
  "palette.hint": "↑↓ navigate · ↵ open · esc close",

  "hero.badge": "Currently at Hyundai Motor Deutschland",
  "hero.greeting": "Hi, I’m",
  "hero.title.a": "Turning ",
  "hero.title.b": "raw data",
  "hero.title.c": " into decisions people trust.",
  "hero.intro":
    "Data analyst with a master’s in Data Analytics and a soft spot for hard data problems — from forecasting models and anomaly detection to LLM-powered systems. Currently building AI-driven analytics at Hyundai Motor Deutschland.",
  "hero.cta.cv": "Download CV",
  "hero.cta.contact": "Get in touch",
  "hero.scroll": "Scroll to explore",
  "hero.photoAlt": "Portrait of Basharat Mubashir Ahmed",

  "stats.years": "Years working with data",
  "stats.orgs": "Companies & research institutes",
  "stats.degrees": "Academic degrees",

  "about.kicker": "About me",
  "about.title": "The story behind the data",
  "about.p1":
    "I started out as a mechanical engineer in India — first at NIT Durgapur, then at IIT Delhi. Somewhere along the way I realised that the part of engineering I loved most wasn’t the hardware. It was the data behind it: the measurements, the models, the patterns hiding in the noise. So I followed that curiosity to Germany.",
  "about.p2":
    "At the University of Hildesheim I turned it into a profession — a Master’s in Data Analytics, supported by the Deutschlandstipendium, with a focus on statistics, machine learning and business analytics. Alongside my studies I worked as a research assistant, supporting courses in statistics and ML and mentoring students through their first real analysis projects. Explaining something is still the fastest way I know to truly understand it.",
  "about.p3":
    "Since then I’ve chased interesting data problems across very different worlds: anomaly detection in measurement data at Bosch, energy time series at Fraunhofer IEE, market forecasting for the used-vehicle portfolio at Volkswagen Financial Services, and an EU-wide project on IT security and digital infrastructure at Goethe University Frankfurt.",
  "about.p4":
    "Today I’m at Hyundai Motor Deutschland, where analytics meets AI engineering — Tableau and SQL on one side, LLM-based systems and AI agents on the other. What keeps me hooked is the same thing that got me started: the moment a messy dataset turns into a decision someone can actually trust. That’s where I’m heading next, too — deeper into AI engineering, building agentic systems that make analytics feel effortless.",
  "about.howTitle": "How I work",
  "about.how1.t": "Understand first",
  "about.how1.d":
    "Before touching a single line of code, I want to know which decision the analysis is supposed to support. Wrong question, wrong model.",
  "about.how2.t": "Validate everything",
  "about.how2.d":
    "Every dataset lies a little. Quality checks and plausibility tests aren’t overhead — they’re the foundation of every result I put my name on.",
  "about.how3.t": "Automate the boring parts",
  "about.how3.d":
    "If I have to do it twice, I script it. Pipelines, reports, checks — automation frees up time for the thinking that actually creates value.",

  "skills.kicker": "Toolbox",
  "skills.title": "Skills & tools I use daily",
  "skills.sub": "The technologies I actually work with in real projects — nothing padded.",
  "skills.g1": "Languages & Analysis",
  "skills.g2": "Machine Learning & AI",
  "skills.g3": "Data Engineering",
  "skills.g4": "BI & Collaboration",
  "skills.statistics": "Statistics",
  "skills.modeling": "Data Modeling",
  "skills.agents": "AI Agents",
  "skills.forecasting": "Forecasting",
  "skills.validation": "Data Validation",
  "skills.agile": "Agile Methods",

  "exp.kicker": "Career",
  "exp.title": "Where I’ve made an impact",
  "exp.current": "Current",
  "exp.tablistAria": "Career stations",

  "exp1.role": "Data Analyst & AI Engineer",
  "exp1.date": "Jan 2026 – Present",
  "exp1.b1": "Data analysis and interactive reporting with Tableau and SQL.",
  "exp1.b2": "AI engineering — from LLM-based solutions to autonomous AI agents.",
  "exp1.b3": "New role since January 2026 — focus areas are growing with it.",

  "exp2.role": "Data Analyst & Project Manager",
  "exp2.date": "Aug 2024 – Dec 2025 · Frankfurt am Main",
  "exp2.b1":
    "Analysed and visualised KPIs for an EU-wide project on IT security and digital infrastructure.",
  "exp2.b2": "Built data-driven decision support and prototype analytical models.",
  "exp2.b3":
    "Owned data integration, data quality and the automation of recurring analysis workflows.",
  "exp2.b4":
    "Collaborated closely with international partners from research, public administration and industry.",

  "exp3.role": "Data Science Intern · Master’s Thesis",
  "exp3.date": "Jul 2023 – Jun 2024 · Braunschweig",
  "exp3.b1":
    "Developed predictive models to analyse the used-vehicle portfolio in the secondary market.",
  "exp3.b2": "Applied machine learning for data-driven forecasting and market monitoring.",
  "exp3.b3": "Implemented scalable analysis processes via a CI/CD pipeline.",
  "exp3.b4": "Created decision-ready visualisations for asset management stakeholders.",

  "exp4.role": "Working Student, Systems & Data Analysis",
  "exp4.date": "Jul 2023 – Jan 2024 · Hildesheim",
  "exp4.b1": "Detected anomalies in complex measurement data.",
  "exp4.b2": "Contributed to quality assurance processes in a production-related context.",

  "exp5.role": "Data Science Intern",
  "exp5.date": "Apr 2023 – Jun 2023 · Kassel",
  "exp5.b1": "Statistically analysed energy measurement data to identify unusual patterns.",
  "exp5.b2": "Produced documented reports for research knowledge transfer.",

  "exp6.role": "Research Assistant, Statistics & ML",
  "exp6.date": "Oct 2022 – Jul 2024 · Hildesheim",
  "exp6.b1": "Supported courses in statistics, data analysis and machine learning.",
  "exp6.b2": "Mentored students through analysis projects in R, Python and Power BI.",

  "exp7.role": "Working Student, Technical Analysis",
  "exp7.date": "Feb 2022 – Jul 2022 · Hannover",
  "exp7.b1": "Monitored KPIs and built automated dashboards for logistics process optimisation.",
  "exp7.b2": "Improved reporting quality with data-driven tooling.",

  "exp8.role": "Project Lead, Data Analysis & R&D",
  "exp8.date": "Jul 2018 – Jun 2019 · India",
  "exp8.b1": "Ran data-driven market analyses to inform strategic decisions.",
  "exp8.b2": "Led analysis projects focused on efficiency gains and cost reduction.",

  "edu.kicker": "Education",
  "edu.title": "Three degrees, two countries",
  "edu1.badge": "Deutschlandstipendium",
  "edu1.degree": "M.Sc. Data Analytics",
  "edu1.date": "Oct 2021 – Jul 2024 · Germany",
  "edu1.note":
    "Statistics · Data Analysis · Data Modelling · Machine Learning · Business Analytics",
  "edu2.degree": "M.Tech Mechanical Design",
  "edu2.date": "Jul 2019 – Jun 2021 · India",
  "edu2.note": "One of India’s most competitive engineering institutes.",
  "edu3.degree": "B.Tech Mechanical Engineering",
  "edu3.date": "Aug 2014 – Jun 2018 · India",
  "edu3.note": "Foundation in engineering, mathematics and problem-solving.",

  "proj.kicker": "Portfolio",
  "proj.title": "Selected work",
  "proj.sub":
    "Professional projects from my career so far. Much of the code lives in private company repositories — I’m happy to walk through any of it in a conversation.",
  "proj.case": "Case study",
  "proj.wip": "In progress",
  "proj.soon": "Coming soon",
  "proj.prev": "Scroll projects left",
  "proj.next": "Scroll projects right",

  "proj1.title": "Used-Vehicle Market Forecasting",
  "proj1.desc":
    "For my master’s thesis at Volkswagen Financial Services, I built predictive models to analyse the used-vehicle portfolio — forecasting market developments and turning them into visualisations that asset managers actually used. Shipped through a CI/CD pipeline, built to scale.",
  "proj2.title": "EU-Wide Analytics & KPI Platform",
  "proj2.desc":
    "An EU-wide project on IT security and digital infrastructure at Goethe University Frankfurt: I owned data integration, data quality and the automation of recurring analyses — and built the KPI analyses and visualisations that partners from research, government and industry relied on.",
  "proj3.title": "AI Agents for Analytics",
  "proj3.desc":
    "The newest chapter: analytics and AI engineering at Hyundai Motor Deutschland — Tableau, SQL and the design of LLM-based AI agents. Details will follow as the work matures.",
  "proj4.title": "Sensor Anomaly Detection",
  "proj4.desc":
    "Anomaly detection in complex measurement data at Bosch, supporting quality assurance close to production — an environment where a missed outlier has real-world consequences.",
  "proj5.title": "Automated Logistics Dashboards",
  "proj5.desc":
    "KPI monitoring and automated dashboards for logistics process optimisation at Synaos — replacing manual reporting with data-driven tools that gave the team reliable, continuous visibility into their processes.",
  "proj6.title": "Energy Time-Series Analysis",
  "proj6.desc":
    "Statistical analysis of energy measurement data at Fraunhofer IEE: identifying unusual patterns in time series and writing documented reports that carried the findings into research.",

  "hon.kicker": "Recognition",
  "hon.title": "Honors along the way",
  "hon1.t": "Deutschlandstipendium",
  "hon1.d":
    "Germany’s national merit scholarship — awarded for outstanding academic performance during my M.Sc. in Data Analytics at the University of Hildesheim.",
  "hon2.t": "Teaching & Mentoring",
  "hon2.d":
    "Two years as a research assistant at the University of Hildesheim — supporting courses in statistics, data analysis and machine learning, and mentoring students through their first real analysis projects in R, Python and Power BI.",
  "hon3.t": "Master’s Thesis in Industry",
  "hon3.d":
    "Wrote my master’s thesis inside Volkswagen Financial Services — applied research with real stakeholders, real deadlines and production constraints.",

  "contact.kicker": "Contact",
  "contact.title": "Have a role or a project in mind?",
  "contact.sub":
    "I’m always happy to talk about data, AI and interesting problems. The fastest way to reach me is email — I usually reply within a day.",
  "contact.email": "Email",
  "contact.location": "Location",
  "contact.locationValue": "Frankfurt Rhein-Main, Germany",
  "contact.githubValue": "Add your profile link",
  "contact.linkedinValue": "Add your profile link",

  "form.name": "Name",
  "form.namePh": "How should I address you?",
  "form.email": "Email",
  "form.emailPh": "Where can I reply?",
  "form.message": "Message",
  "form.messagePh": "What would you like to talk about?",
  "form.submit": "Send message",
  "form.note": "Opens your email app — nothing is stored on this site.",
  "form.mailSubject": "Portfolio contact from",

  "toast.mail": "Opening your email app…",

  "footer.tagline": "Data analyst & AI engineer based in Germany.",
  "footer.rights": "All rights reserved.",
  "footer.built": "Designed & built by hand — no templates.",
  "footer.topAria": "Back to top",
};

export type TranslationKey = keyof typeof en;

const de: Record<TranslationKey, string> = {
  "meta.title": "Basharat Mubashir Ahmed – Data Analyst & AI Engineer",
  "meta.desc":
    "Data Analyst und AI Engineer in Deutschland – Prognosemodelle, Anomalieerkennung, LLM-basierte Systeme und Dashboards, mit denen wirklich gearbeitet wird. Aktuell bei Hyundai Motor Deutschland.",

  "a11y.skip": "Zum Inhalt springen",

  "nav.top": "Start",
  "nav.about": "Über mich",
  "nav.skills": "Skills",
  "nav.experience": "Erfahrung",
  "nav.projects": "Projekte",
  "nav.contact": "Kontakt",
  "nav.langAria": "Sprache wechseln",
  "nav.themeAria": "Zwischen hellem und dunklem Design wechseln",
  "nav.menuAria": "Menü öffnen",
  "nav.dotsAria": "Schnellnavigation",

  "palette.open": "Suchen & schnell springen",
  "palette.placeholder": "Bereiche und Aktionen suchen …",
  "palette.sections": "Bereiche",
  "palette.actions": "Aktionen",
  "palette.toDark": "Zum dunklen Design wechseln",
  "palette.toLight": "Zum hellen Design wechseln",
  "palette.toEn": "Switch to English",
  "palette.toDe": "Zur deutschen Version wechseln",
  "palette.copyEmail": "E-Mail-Adresse kopieren",
  "palette.copied": "E-Mail kopiert",
  "palette.email": "E-Mail schreiben",
  "palette.empty": "Keine Treffer",
  "palette.hint": "↑↓ wählen · ↵ öffnen · esc schließen",

  "hero.badge": "Aktuell bei Hyundai Motor Deutschland",
  "hero.greeting": "Hi, ich bin",
  "hero.title.a": "Ich verwandle ",
  "hero.title.b": "Rohdaten",
  "hero.title.c": " in Entscheidungen, denen man vertrauen kann.",
  "hero.intro":
    "Data Analyst mit Master in Data Analytics und einer Schwäche für knifflige Datenprobleme – von Prognosemodellen über Anomalieerkennung bis zu LLM-basierten Systemen. Aktuell baue ich KI-gestützte Analytik bei Hyundai Motor Deutschland.",
  "hero.cta.cv": "Lebenslauf herunterladen",
  "hero.cta.contact": "Kontakt aufnehmen",
  "hero.scroll": "Scrollen & entdecken",
  "hero.photoAlt": "Porträt von Basharat Mubashir Ahmed",

  "stats.years": "Jahre Erfahrung mit Daten",
  "stats.orgs": "Unternehmen & Forschungseinrichtungen",
  "stats.degrees": "Hochschulabschlüsse",

  "about.kicker": "Über mich",
  "about.title": "Die Geschichte hinter den Daten",
  "about.p1":
    "Angefangen habe ich als Maschinenbauingenieur in Indien – erst am NIT Durgapur, dann am IIT Delhi. Irgendwann wurde mir klar: Was mich am Ingenieurwesen wirklich fasziniert, ist nicht die Hardware, sondern die Daten dahinter – die Messwerte, die Modelle, die Muster im Rauschen. Dieser Neugier bin ich nach Deutschland gefolgt.",
  "about.p2":
    "An der Universität Hildesheim habe ich daraus einen Beruf gemacht: einen Master in Data Analytics, gefördert durch das Deutschlandstipendium, mit Schwerpunkt auf Statistik, Machine Learning und Business Analytics. Nebenbei war ich als wissenschaftliche Hilfskraft tätig, habe Lehrveranstaltungen in Statistik und ML unterstützt und Studierende durch ihre ersten echten Analyseprojekte begleitet. Etwas zu erklären ist bis heute der schnellste Weg, den ich kenne, um es wirklich zu verstehen.",
  "about.p3":
    "Seitdem habe ich spannende Datenprobleme in sehr unterschiedlichen Welten gelöst: Anomalieerkennung in Messdaten bei Bosch, Energiezeitreihen am Fraunhofer IEE, Marktprognosen für den Fahrzeugbestand bei Volkswagen Financial Services und ein EU-weites Projekt zu IT-Sicherheit und digitaler Infrastruktur an der Goethe-Universität Frankfurt.",
  "about.p4":
    "Heute bin ich bei Hyundai Motor Deutschland – dort, wo Analytics auf AI Engineering trifft: Tableau und SQL auf der einen Seite, LLM-basierte Systeme und KI-Agenten auf der anderen. Was mich antreibt, ist dasselbe wie am Anfang: der Moment, in dem aus einem chaotischen Datensatz eine Entscheidung wird, der man vertrauen kann. Genau dahin geht es auch weiter – tiefer ins AI Engineering, hin zu agentischen Systemen, die Analytik mühelos wirken lassen.",
  "about.howTitle": "So arbeite ich",
  "about.how1.t": "Erst verstehen",
  "about.how1.d":
    "Bevor ich eine Zeile Code schreibe, will ich wissen, welche Entscheidung die Analyse eigentlich unterstützen soll. Falsche Frage, falsches Modell.",
  "about.how2.t": "Alles validieren",
  "about.how2.d":
    "Jeder Datensatz schwindelt ein bisschen. Qualitätschecks und Plausibilitätstests sind kein Overhead, sondern die Grundlage für jedes Ergebnis, hinter dem ich stehe.",
  "about.how3.t": "Routine automatisieren",
  "about.how3.d":
    "Was ich zweimal machen muss, wird ein Skript. Pipelines, Reports, Checks – Automatisierung schafft Zeit für das Denken, das wirklich Mehrwert bringt.",

  "skills.kicker": "Werkzeugkasten",
  "skills.title": "Skills & Tools für den Alltag",
  "skills.sub": "Die Technologien, mit denen ich tatsächlich in Projekten arbeite – ohne Füllmaterial.",
  "skills.g1": "Sprachen & Analyse",
  "skills.g2": "Machine Learning & KI",
  "skills.g3": "Data Engineering",
  "skills.g4": "BI & Zusammenarbeit",
  "skills.statistics": "Statistik",
  "skills.modeling": "Datenmodellierung",
  "skills.agents": "KI-Agenten",
  "skills.forecasting": "Prognosemodelle",
  "skills.validation": "Datenvalidierung",
  "skills.agile": "Agile Methoden",

  "exp.kicker": "Werdegang",
  "exp.title": "Stationen, die mich geprägt haben",
  "exp.current": "Aktuell",
  "exp.tablistAria": "Berufliche Stationen",

  "exp1.role": "Data Analyst & AI Engineer",
  "exp1.date": "Jan. 2026 – heute",
  "exp1.b1": "Datenanalyse und interaktives Reporting mit Tableau und SQL.",
  "exp1.b2": "AI Engineering – von LLM-basierten Lösungen bis zu autonomen KI-Agenten.",
  "exp1.b3": "Neu seit Januar 2026 – die Schwerpunkte wachsen mit der Rolle.",

  "exp2.role": "Datenanalyst & Projektmanager",
  "exp2.date": "Aug. 2024 – Dez. 2025 · Frankfurt am Main",
  "exp2.b1":
    "KPIs im Rahmen eines EU-weiten Projekts zu IT-Sicherheit und digitaler Infrastruktur analysiert und visualisiert.",
  "exp2.b2":
    "Datengetriebene Entscheidungsgrundlagen sowie prototypische Analysemodelle entwickelt.",
  "exp2.b3":
    "Verantwortung für Datenintegration, Datenqualität und die Automatisierung wiederkehrender Analyseprozesse.",
  "exp2.b4":
    "Enge Zusammenarbeit mit internationalen Partnern aus Forschung, öffentlicher Verwaltung und Industrie.",

  "exp3.role": "Data-Science-Praktikant · Masterarbeit",
  "exp3.date": "Juli 2023 – Juni 2024 · Braunschweig",
  "exp3.b1": "Prädiktive Modelle zur Analyse des Fahrzeugbestands im Sekundärmarkt entwickelt.",
  "exp3.b2":
    "Machine-Learning-Verfahren für datenbasierte Prognosen und Marktbeobachtung eingesetzt.",
  "exp3.b3": "Skalierbare Analyseprozesse über eine CI/CD-Pipeline implementiert.",
  "exp3.b4":
    "Entscheidungsrelevante Visualisierungen für Stakeholder im Asset Management erstellt.",

  "exp4.role": "Werkstudent System- & Datenanalyse",
  "exp4.date": "Juli 2023 – Jan. 2024 · Hildesheim",
  "exp4.b1": "Anomalien in komplexen Messdaten erkannt.",
  "exp4.b2": "An Qualitätssicherungsprozessen im produktionsnahen Kontext mitgewirkt.",

  "exp5.role": "Data-Science-Praktikant",
  "exp5.date": "Apr. 2023 – Juni 2023 · Kassel",
  "exp5.b1": "Energiemessdaten statistisch analysiert und auffällige Verläufe identifiziert.",
  "exp5.b2": "Dokumentierte Reports für den forschungsseitigen Wissenstransfer erstellt.",

  "exp6.role": "Wissenschaftliche Hilfskraft, Statistik & ML",
  "exp6.date": "Okt. 2022 – Juli 2024 · Hildesheim",
  "exp6.b1": "Lehrveranstaltungen in Statistik, Datenanalyse und Machine Learning unterstützt.",
  "exp6.b2": "Studierende bei Analyseprojekten mit R, Python und Power BI fachlich betreut.",

  "exp7.role": "Werkstudent Technischer Analyst",
  "exp7.date": "Feb. 2022 – Juli 2022 · Hannover",
  "exp7.b1":
    "KPI-Monitoring und automatisierte Dashboards zur Prozessoptimierung in der Logistik entwickelt.",
  "exp7.b2": "Reportingqualität durch datengetriebene Tools verbessert.",

  "exp8.role": "Projektleiter Datenanalyse & R&D",
  "exp8.date": "Juli 2018 – Juni 2019 · Indien",
  "exp8.b1": "Datenbasierte Marktanalysen zur Ableitung strategischer Entscheidungen durchgeführt.",
  "exp8.b2": "Analyseprojekte mit Fokus auf Effizienzsteigerung und Kostensenkung geleitet.",

  "edu.kicker": "Ausbildung",
  "edu.title": "Drei Abschlüsse, zwei Länder",
  "edu1.badge": "Deutschlandstipendium",
  "edu1.degree": "M.Sc. Data Analytics",
  "edu1.date": "Okt. 2021 – Juli 2024 · Deutschland",
  "edu1.note":
    "Statistik · Datenanalyse · Datenmodellierung · Machine Learning · Business Analytics",
  "edu2.degree": "M.Tech Mechanical Design",
  "edu2.date": "Juli 2019 – Juni 2021 · Indien",
  "edu2.note": "Eines der renommiertesten Technik-Institute Indiens.",
  "edu3.degree": "B.Tech Maschinenbau",
  "edu3.date": "Aug. 2014 – Juni 2018 · Indien",
  "edu3.note": "Fundament in Ingenieurwesen, Mathematik und Problemlösung.",

  "proj.kicker": "Projekte",
  "proj.title": "Ausgewählte Arbeiten",
  "proj.sub":
    "Berufliche Projekte aus meinem bisherigen Werdegang. Ein Großteil des Codes liegt in privaten Firmen-Repositories – im Gespräch erzähle ich gern mehr dazu.",
  "proj.case": "Details",
  "proj.wip": "In Arbeit",
  "proj.soon": "Demnächst",
  "proj.prev": "Projekte nach links blättern",
  "proj.next": "Projekte nach rechts blättern",

  "proj1.title": "Marktprognosen für Gebrauchtfahrzeuge",
  "proj1.desc":
    "Für meine Masterarbeit bei Volkswagen Financial Services habe ich prädiktive Modelle zur Analyse des Fahrzeugbestands im Sekundärmarkt entwickelt – mit Prognosen zur Marktentwicklung und Visualisierungen, mit denen das Asset Management tatsächlich gearbeitet hat. Ausgeliefert über eine CI/CD-Pipeline, skalierbar gebaut.",
  "proj2.title": "EU-weite Analytics- & KPI-Plattform",
  "proj2.desc":
    "Ein EU-weites Projekt zu IT-Sicherheit und digitaler Infrastruktur an der Goethe-Universität Frankfurt: Ich habe Datenintegration, Datenqualität und die Automatisierung wiederkehrender Analysen verantwortet – und die KPI-Analysen und Visualisierungen gebaut, auf die sich Partner aus Forschung, Verwaltung und Industrie verlassen haben.",
  "proj3.title": "KI-Agenten für Analytics",
  "proj3.desc":
    "Das neueste Kapitel: Analytics und AI Engineering bei Hyundai Motor Deutschland – Tableau, SQL und der Aufbau LLM-basierter KI-Agenten. Details folgen, sobald die Arbeit reift.",
  "proj4.title": "Anomalieerkennung in Sensordaten",
  "proj4.desc":
    "Anomalieerkennung in komplexen Messdaten bei Bosch, zur Unterstützung der Qualitätssicherung im produktionsnahen Umfeld – dort, wo ein übersehener Ausreißer echte Folgen hat.",
  "proj5.title": "Automatisierte Logistik-Dashboards",
  "proj5.desc":
    "KPI-Monitoring und automatisierte Dashboards zur Prozessoptimierung in der Logistik bei Synaos – manuelles Reporting ersetzt durch datengetriebene Tools, die dem Team jederzeit verlässlichen Einblick in ihre Prozesse gaben.",
  "proj6.title": "Analyse von Energiezeitreihen",
  "proj6.desc":
    "Statistische Analyse von Energiemessdaten am Fraunhofer IEE: auffällige Verläufe in Zeitreihen identifizieren und die Ergebnisse in dokumentierten Reports in die Forschung tragen.",

  "hon.kicker": "Auszeichnungen",
  "hon.title": "Meilensteine & Auszeichnungen",
  "hon1.t": "Deutschlandstipendium",
  "hon1.d":
    "Das nationale Begabtenstipendium Deutschlands – verliehen für herausragende Leistungen während meines M.Sc. in Data Analytics an der Universität Hildesheim.",
  "hon2.t": "Lehre & Betreuung",
  "hon2.d":
    "Zwei Jahre wissenschaftliche Hilfskraft an der Universität Hildesheim – mit Unterstützung von Lehrveranstaltungen in Statistik, Datenanalyse und Machine Learning sowie der Betreuung Studierender bei ihren ersten echten Analyseprojekten in R, Python und Power BI.",
  "hon3.t": "Masterarbeit in der Industrie",
  "hon3.d":
    "Meine Masterarbeit entstand direkt bei Volkswagen Financial Services – angewandte Forschung mit echten Stakeholdern, echten Deadlines und produktionsnahen Anforderungen.",

  "contact.kicker": "Kontakt",
  "contact.title": "Sie haben eine Position oder ein Projekt im Kopf?",
  "contact.sub":
    "Über Daten, KI und spannende Probleme spreche ich immer gern. Am schnellsten erreichen Sie mich per E-Mail – ich antworte in der Regel innerhalb eines Tages.",
  "contact.email": "E-Mail",
  "contact.location": "Standort",
  "contact.locationValue": "Rhein-Main-Gebiet, Deutschland",
  "contact.githubValue": "Profil-Link folgt",
  "contact.linkedinValue": "Profil-Link folgt",

  "form.name": "Name",
  "form.namePh": "Wie darf ich Sie ansprechen?",
  "form.email": "E-Mail",
  "form.emailPh": "Wohin darf ich antworten?",
  "form.message": "Nachricht",
  "form.messagePh": "Worüber möchten Sie sprechen?",
  "form.submit": "Nachricht senden",
  "form.note": "Öffnet Ihr E-Mail-Programm – auf dieser Seite wird nichts gespeichert.",
  "form.mailSubject": "Portfolio-Kontakt von",

  "toast.mail": "E-Mail-Programm wird geöffnet …",

  "footer.tagline": "Data Analyst & AI Engineer aus Deutschland.",
  "footer.rights": "Alle Rechte vorbehalten.",
  "footer.built": "Von Hand entworfen & gebaut – ohne Templates.",
  "footer.topAria": "Nach oben",
};

/* Typing-effect role lines (arrays live outside the flat string dictionary) */
export const HERO_ROLES: Record<Lang, string[]> = {
  en: ["Data Analyst", "AI Engineer", "Machine Learning Practitioner", "BI & Dashboard Developer"],
  de: ["Data Analyst", "AI Engineer", "Machine-Learning-Spezialist", "BI- & Dashboard-Entwickler"],
};

export const TRANSLATIONS: Record<Lang, Record<TranslationKey, string>> = { en, de };
