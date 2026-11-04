import { SkillGroup, SoftSkillGroup, Company } from './types'

export const skillGroups: SkillGroup[] = [
	{
		group: 'Featured Skills',
		skills: [
			{ name: 'TypeScript', level: 95, years: 7 },
			{ name: 'JavaScript (ECMAScript)', level: 95, years: 13 },
			{ name: 'React', level: 95, years: 6 },
			{ name: 'Next.js', level: 85, years: 5 },
			{ name: 'Node.js', level: 95, years: 10 },
			{ name: 'HTML/HTML5', level: 90, years: 15 },
			{ name: 'Responsive CSS', level: 90, years: 10 },
			{ name: 'Tailwind CSS', level: 90, years: 5 },
			{ name: 'HTTP', level: 90, years: 13 },
			{ name: 'Swagger/Open API', level: 80, years: 6 },
		],
	},

	{
		group: 'Branchen Know-How',
		skills: [
			{ name: 'Industrie/IoT', level: 90, years: 6 },
			{ name: 'Marketing', level: 80, years: 5 },
			{ name: 'Immobilien & Facility Management', level: 80, years: 4 },
			{ name: 'Luft- und Raumfahrtindustrie', level: 70, years: 2 },
			{ name: 'Steuerberatung', level: 50, years: 1 },
			{ name: 'Gesundheitswesen', level: 25, years: 1 },
		],
	},

	{
		group: 'Frontend Development',
		skills: [
			{ name: 'JavaScript (ECMAScript)', level: 95, years: 13 },
			{ name: 'TypeScript', level: 95, years: 7 },
			{ name: 'React', level: 95, years: 6 },
			{ name: 'Vue.js', level: 85, years: 5 },
			{ name: 'Angular', level: 40, years: 3 },
			{ name: 'HTML/HTML5', level: 90, years: 15 },
			{ name: 'Responsive CSS', level: 90, years: 10 },
			{ name: 'GraphQL', level: 80, years: 6 },
			{ name: 'Next.js', level: 85, years: 5 },
			{ name: 'Nuxt', level: 85, years: 5 },
			{ name: 'Tailwind CSS', level: 90, years: 4 },
			{ name: 'Mantine', level: 90, years: 5 },
			{ name: 'Material UI', level: 80, years: 4 },
			{ name: 'Static Site Generation (SSG)', level: 80, years: 6 },
			{ name: 'Progressive Web Apps (PWA)', level: 80, years: 6 },
			{ name: 'Single Page Applications (SPA)', level: 80, years: 8 },
			{ name: 'Multi Page Applications (MPA)', level: 80, years: 8 },
			{ name: 'Swagger/Open API', level: 80, years: 6 },
			{ name: 'DOM (Document Object Model)', level: 80, years: 10 },
			{ name: 'Responsive Web Design', level: 80, years: 10 },
			{ name: 'Prettier/ESLint', level: 80, years: 8 },
			{ name: 'Storybook', level: 60, years: 2 },
			{ name: 'UI/UX Design', level: 80, years: 5 },
			{ name: 'Accessibility', level: 60, years: 5 },
			{ name: 'Docusaurus', level: 40, years: 3 },
			{ name: 'Wordpress', level: 60, years: 4 },
			{ name: 'TYPO3', level: 40, years: 3 },
			{ name: 'Figma', level: 40, years: 1 },
			{ name: 'Testing Library', level: 70, years: 1 },
		],
	},

	{
		group: 'Backend Development',
		skills: [
			{ name: 'Node.js', level: 95, years: 9 },
			{ name: 'npm', level: 90, years: 9 },
			{ name: 'RESTful APIs', level: 95, years: 10 },
			{ name: 'Open API/Swagger', level: 80, years: 6 },
			{ name: 'WebSockets', level: 80, years: 8 },
			{ name: 'Microservices/API', level: 80, years: 5 },
			{ name: 'JWT (JSON Web Tokens)', level: 60, years: 3 },
			{ name: 'Bash/CLI', level: 80, years: 7 },
			{ name: 'Docker/Docker Compose', level: 80, years: 7 },
			{ name: 'SQL', level: 80, years: 13 },
			{ name: 'RDBMS (Relational DB)', level: 80, years: 12 },
			{ name: 'MariaDB', level: 80, years: 7 },
			{ name: 'PostgreSQL', level: 80, years: 7 },
			{ name: 'Keycloak', level: 60, years: 2 },
			{ name: 'NoSQL/Redis', level: 40, years: 1 },
			{ name: 'MongoDB', level: 40, years: 1 },
			{ name: 'pnpm', level: 65, years: 2 },
			{ name: 'yarn', level: 75, years: 5 },
			{ name: 'PHP', level: 90, years: 10 },
			{ name: 'Java 21EE', level: 20, years: 2 },
			{ name: 'Python', level: 25, years: 1 },
			{ name: 'C#', level: 55, years: 1 },
			{ name: '.NET / ASP.NET Core', level: 55, years: 1 },
			{ name: 'Entity Framework Core', level: 50, years: 1 },
			{ name: 'Flyway (DB-Migrationen)', level: 60, years: 1 },
			{ name: 'PDF/Excel-Generierung (LaTeX)', level: 50, years: 1 },
		],
	},

	{
		group: 'DevOps & Infrastructure',
		skills: [
			{
				name: 'Git (Distributed Revision Control)',
				level: 80,
				years: 12,
			},
			{ name: 'GitHub/GitLab', level: 90, years: 12 },
			{ name: 'Netlify', level: 80, years: 6 },
			{ name: 'VSCode', level: 80, years: 6 },
			{ name: 'SVN', level: 60, years: 3 },
			{ name: 'AWS Lambda', level: 60, years: 2 },
			{ name: 'CI/CD Pipelines (GitLab DevOps)', level: 60, years: 5 },
			{ name: 'Ubuntu/Linux', level: 80, years: 13 },
			{ name: 'Traefik', level: 80, years: 7 },
			{ name: 'Apache', level: 60, years: 6 },
			{ name: 'Nginx', level: 40, years: 4 },
			{ name: 'Cloud Apps Development', level: 60, years: 2 },
			{ name: 'GitHub Actions', level: 65, years: 1 },
			{ name: 'OpenTofu (Infrastructure as Code)', level: 40, years: 1 },
			{ name: 'AWS Cognito', level: 40, years: 1 },
		],
	},

	{
		group: 'Testing',
		skills: [
			{ name: 'Jest', level: 90, years: 4 },
			{ name: 'Vitest', level: 90, years: 3 },
			{ name: 'Cypress', level: 60, years: 2 },
			{ name: 'Playwright', level: 40, years: 1 },
			{ name: 'Unit Testing', level: 80, years: 6 },
			{ name: 'Test-Driven Development (TDD)', level: 80, years: 4 },
			{ name: 'API/Web Services Testing', level: 70, years: 3 },
			{ name: 'E2E (End 2 End) Testing', level: 60, years: 3 },
			{ name: 'BrowserStack', level: 60, years: 2 },
			{ name: 'Testcontainers', level: 55, years: 1 },
		],
	},

	{
		group: 'Methoden & Architektur',
		skills: [
			{ name: 'Functional Programming (FP)', level: 80, years: 6 },
			{ name: 'Object-Oriented Programming (OOP)', level: 60, years: 4 },
			{ name: 'Dependency Injection', level: 80, years: 5 },
			{ name: 'SOLID Principles', level: 80, years: 5 },
			{ name: 'Domain Driven Development (DDD)', level: 40, years: 2 },
			{ name: 'MVC (Model-View-Controller)', level: 60, years: 4 },
			{ name: 'Feature-Slice-Architektur', level: 70, years: 3 },
		],
	},

	{
		group: 'KI-gestützte Entwicklung',
		skills: [
			{ name: 'Claude Code', level: 85, years: 2 },
			{ name: 'Cursor', level: 80, years: 2 },
			{ name: 'ChatGPT', level: 65, years: 2 },
			{ name: 'MCP (Model Context Protocol)', level: 60, years: 1 },
			{ name: 'Skills (Agent Skills)', level: 60, years: 1 },
			{ name: 'llms.txt', level: 50, years: 1 },
			{ name: 'OpenRouter', level: 45, years: 1 },
			{ name: 'OpenClaw', level: 40, years: 1 },
			{ name: 'Hermes Agent', level: 40, years: 1 },
			{ name: 'GrokBot', level: 35, years: 1 },
		],
	},

	{
		group: 'Security',
		skills: [
			{ name: 'Web Security', level: 80, years: 7 },
			{ name: 'Application Security', level: 80, years: 7 },
			{ name: 'API Security', level: 80, years: 5 },
			{ name: 'Encryption', level: 60, years: 15 },
			{ name: 'DSGVO/GDPR Practices', level: 60, years: 5 },
			{ name: 'Dependency Auditing', level: 60, years: 5 },
		],
	},

	{
		group: 'Collaboration & Agile',
		skills: [
			{ name: 'Remote Collaboration', level: 80, years: 7 },
			{ name: 'Agile/SCRUM', level: 60, years: 6 },
			{ name: 'Kanban', level: 60, years: 2 },
			{ name: 'Consultancy and Coaching', level: 80, years: 7 },
			{ name: 'Mentoring', level: 80, years: 7 },
			{ name: 'JIRA', level: 80, years: 7 },
			{ name: 'Confluence', level: 80, years: 7 },
		],
	},
]
export const softSkills: SoftSkillGroup = {
	group: 'Soft Skills',
	skills: [
		{ name: 'Effektive Kommunikation' },
		{ name: 'Organisation und Dokumentation' },
		{ name: 'Schnelle Wissensaufnahme' },
		{ name: 'Führungskompetenzen' },
		{ name: 'Einfühlvermögen' },
		{ name: 'Kollaboration (Pair Programming und Code Reviews)' },
		{ name: 'Transparenz' },
	],
}

export const companies: Company[] = [
	{
		name: 'Quantrefy',
		objective: '',
		timespan: '30.03.2026-31.03.2027',
		assignments: [
			{
				customer: 'Wave App',
				timespan: '',
				role: 'Fullstack Developer',
				objective: (
					<p>
						Quantrefy entwickelt die Wave Platform, eine
						cloudbasierte Plattform für Energiebroker und
						Energiehändler. Sie digitalisiert den gesamten
						Beschaffungsprozess für Strom und Gas: von der Erfassung
						der Kundendaten (Lieferstellen, Zähler, Verbrauchsdaten)
						über die Ausschreibung und den Vergleich von
						Lieferantenangeboten bis Zuschlag, Vertragsgestaltung
						und Abrechnung. Hinzu kommen Module für PPA-Verträge und
						ein Certificate Broker für Handelsgeschäfte und Profit
						and Loss-Auswertungen. Technisch besteht die Plattform
						aus .NET-Microservices, zwei Vue-Frontends und einer
						Infrastruktur in OpenTofu mit mehreren Umgebungen.
						Ausschreibungsunterlagen, E-Mails, Excel-Exporte und
						OnePager werden automatisiert als PDF bzw. Excel
						erzeugt.
					</p>
				),
				tasks: [
					'Mitentwicklung der Wave App für den Ausschreibungsprozess: Verfahrensbrief mit PDF-Generierung, Textbausteinverwaltung mit Rich-Text-Editor (Tiptap), Kontaktpersonen, Dateiverwaltung, Freigabeanfragen und E-Mail-Versand',
					'Entwicklung des Certificate Brokers: Trades, Rechnungen, Verkäufe, Profit and Loss Ansichten, Verknüpfung mit Stammdaten, Preismatrix',
					'Umsetzung von Lieferantenangeboten: Preismodelle, automatische Vorschläge einheitlicher Positionsnamen, Duplikaterkennung und Massenbearbeitung von Bedingungen',
					'Entwicklung komplexer Tabellen-Grids mit Inline-Bearbeitung und Massenänderung (Lieferstellen, Zähler, Lieferantenverträge)',
					'Entwicklung von Backend-Endpunkten und Use-Cases in .NET sowie Datenbankmigrationen',
					'Dokumenten- und Exportgenerierung: LaTeX-Templates für OnePager, Verfahrensbriefe und Interne Abschlussberichte, Excel-Export von Lieferstellen, Berechnungslogik für Margen und Rundung',
					'Fehleranalyse und Behebung in Produktivprozessen, Refactoring wiederverwendbarer Komponenten für teamübergreifende Features',
					'Einhaltung und Erweiterung von Linting-, Architektur- und Commit-Konventionen; Pull Requests und Code Reviews',
					'Einsatz von KI-Tools (Claude Code) mit projektspezifischen Regeln im Entwicklungsalltag',
				],
				programming: [
					'TypeScript, Vue 3 (Composition API), Pinia Colada, Zod, Tiptap, HTML, CSS',
					'C#, .NET, ASP.NET Core, Entity Framework Core',
					'PostgreSQL, SQL, Flyway',
					'LaTeX, Excel-Generierung',
					'Vitest, Testing Library, Testcontainers',
				],
				tools: [
					'GitHub, GitHub Actions, Jira',
					'OpenAPI mit generierten C#- und TypeScript-Clients',
					'pnpm Monorepo, ESLint, Oxidation compiler (oxlint, oxfmt), Prettier',
					'Docker, .NET Aspire, OpenTofu, AWS Cognito',
					'Domain-driven Design, Feature-Slice-Architektur, Data Vault Modellierung',
					'Pull Requests und Code Reviews',
					'KI-gestützte Entwicklung (Claude Code, Cursor Rules)',
				],
			},
		],
	},
	{
		name: 'Truststone Software GmbH',
		timespan: '01.04.2025-Jetzt',
		objective: (
			<p>
				TrustStone Software GmbH ist ein Startup mit Sitz in Hamburg.
				Das kanzlei.land wurde 2011 in der Hamburger Kanzlei
				steueragenten.de zunächst für eigene Mandanten und Mitarbeiter
				unter dem Namen Steuerbüro.online entwickelt. Im Laufe der Zeit
				interessierten sich immer mehr Kanzleien für die neuartige
				Mandantenplattform, welche mit ihrem Bedarf skalieren musste.
			</p>
		),
		assignments: [
			{
				customer: 'Kanzlei.Kand',
				timespan: '01.06.2025-31.11.2025',
				role: 'Senior Frontend Developer',
				objective: (
					<p>
						Das kanzlei.Land ist eine Software As A Service Lösung
						um die Prozesse wie Lohnbuchsteuer, Finanzbuchhaltung
						und Einkommenssteuer von Steuerkanzleien zu
						digitalisieren und die Kommunikation zu zentralisieren.
						Mit über 450 Kanzleien und 100.000 Nutzern die täglich
						auf die Cloud Plattform zugreifen, ist der performante
						und effiziente Zugriff auf die Webbasierte Plattform
						essentiell für den Erfolg ihrer Kunden. Durch die
						Vernetzung mit Schnittstellen zu DATEV, können Kunden
						ihre zahlreichen Daten synchronisieren und verarbeiten.
					</p>
				),
				tasks: [
					'Mitentwicklung der SaaS Plattform kanzlei.Land für Steuerberater und deren Mandanten.',
					'Konzeption und Entwicklung von neuen Features in Abstimmung mit dem Produktmanagement und Stakeholdern.',
					'Effektive Einführung von KI Tools wie Cursor (Claude Sonnet) sowie Etablierung von Cursor Rules und LLM Dokumentation.',
					'Modernisierung und Refactoring von bestehenden Code Basen mit Fokus auf Performance, Wartbarkeit und Skalierbarkeit.',
					'Einführung von User Experience Guidelines und Barrierefreiheit (Accessibility).',
					'Wartung und Monitoring des ausgerollten Produkts mit Hilfe von Grafana, Sentry, Metabase und Matomo.',
					'Dokumentation und Mentoring zu den Themen Entwicklungsprozesse, Architektur, Best Practices.',
					'Auslagerung und Modularisierung der hauseigenen UI Komponenten Bibliothek für Wiederverwendung in anderen Projekten.',
				],
				programming: [
					'React, Redux, Tanstack',
					'PHP, Composer',
					'Bootstrap, TailwindCSS',
					'Typescript, HTML, CSS, SQL',
					'Vitest',
				],
				tools: [
					'Gitlab Pipelines',
					'Functional Programming',
					'Domain Driven Design',
					'Docker, Kubernetes, Helm',
					'npm, Security Audits',
					'eslint, prettier, sonarqube',
					'Pair Programming & Code',
					'Reviews',
					'Agile LESS Framework',
					'Figma, OpenAPI Stoplight',
					'Sentry, Grafana, Matomo,',
					'Metabase',
				],
			},
		],
	},
	{
		name: 'Eviden Germany GmbH',
		timespan: '01.04.2023 – 31.01.2025',
		objective: (
			<p>
				Eviden (ehemals Atos) ist ein Technologieführer der nächsten
				Generation im Bereich der datengesteuerten, vertrauenswürdigen
				und nachhaltigen digitalen Transformation mit über 41.000
				Mitarbeitern weltweit und 4.000 in Deutschland. Eviden
				fokussiert sich auf die Vermittlung von Software-Entwicklern an
				eine Vielzahl von Kunden aus diversen Branchen.
			</p>
		),
		assignments: [
			{
				customer: 'SEDI RehaFact',
				timespan: '07.01.2025 – 31.03.2025',
				objective: (
					<p>
						SEDI RehaFact wird seit über 20 Jahren entwickelt um
						Patientendaten und Aufträge zwischen
						Krankenhausinformationssystemen und Kostenträgern zu
						vermitteln.
					</p>
				),
				role: 'Projektleiter',
				tasks: [
					'Angebote, Dienstleistungs-, und Wartungsverträge sowie Lizenzen ausstellen und verwalten',
					'Wartungs- und Lizenzverträge sowie Leistungsbescheinigungen dokumentieren und pflegen',
					'Kundengespräche und Beratungen zu Preisänderungen und Produkterweiterungen führen',
					'Rechnungsmahnungen, Buchungsprüfungen und Controlling der Rechnungsausschreibungen durchführen',
					'Monatsabschlussaktivitäten, Kostenrückstellungen und eigenständige Kostenprüfungen erledigen',
					'Zeitkonten der Mitarbeiter überprüfen und freigeben',
					'Das Produktteam von 4 Entwicklern anleiten sowie die Produktentwicklung steuern',
					'Support E-Mail-Postfach verwalten und Produktmanagement Anfragen bearbeiten',
				],
				programming: [],
				tools: [
					'SAP',
					'Azure Boards',
					'Microsoft Suite',
					'Agile Development (SCRUM)',
				],
			},
			{
				customer: 'Entwickler-Dienstleistungsabteilung',
				objective: (
					<p>
						Teamlead und Manager-Stellvertretung in einer Abteilung
						für Kundenprojekte und Dienstleistungen mit Fokus auf
						Public Services und Military.
					</p>
				),
				role: 'Teamlead',
				timespan: '01.08.2024-31.03.2025',
				programming: [],
				tasks: [
					'Verantwortung für ein Team von 20 Entwicklern die in verschiedenen Kundenprojekten eingesetzt werden',
					'Onboarding, Offboarding, Personalentwicklung und Weiterbildung der Entwickler',
					'Hiring sowie Technische Interviews und Vertragserstellung von neuen Mitarbeitern',
					'Finanzreporting mit Zielsetzung und Budgetierung',
					'Verwaltung und Organisation der Entwickler-Hardware',
					'Kommunikation mit dem Kunden und Abstimmung der Anforderungen für die jeweiligen Kandidaten',
					'Zeitbuchungen und Urlaubsanträge verwalten',
					'Aktive Mitgestaltung im größeren Führungskreis sowie in der Unternehmensstrategie',
				],
				tools: [],
			},
			{
				customer: 'Deutsche Flugsicherung',
				role: 'Full-Stack Developer, DevOps Engineer',
				timespan: '19.09.2023 – 20.12.2024',
				objective: (
					<p>
						Die DFS baut im Auftrag des BMDV ein System namens SCISP
						(Single Common Information Service Provider) um ein
						landesdeckendes Drohnenverkehrsmanagement zu
						realisieren. Um den kompletten Lebenszyklus der
						Flugsicherung abbilden zu können, sollen über 10
						Microservices gebaut werden, um den Bedarf an Daten wie
						Geozonen, Wetterdaten, Airtraffic, Flugpläne, Warnungen
						und Conformance assurance abecken zu können. Die
						Anwendungen zur Kontrolle des Flugraums werden für
						Betreiber von USpaces, Behörden mit Ordnungs-, und
						Sicherheits-funktion sowie dem Militär zur Verfügung
						gestellt.
					</p>
				),
				tasks: [
					'Führende Rolle in Design und Entwicklung einer Map Library auf Basis von OpenLayers und React',
					'Erstellung eines App Templates mit Hilfe von NextjS,Keycloak und NextAuth.',
					'Konzeption und Umsetzung eines No-Fly Zone Geometrie Editors für dipul.de und Zeus',
					'Refactoring von einer großen Airtraffic App (Zeus) ummit der Map komponente in funktionaler Art zuinteragieren',
					'Technische Lösungen wurden zwischen den Teams der DFSabgestimmt, damit alle Entwickler von gemeinsamen Bibliotheken profitieren.',
					'Docker-Compose und GitLab Pipelines aufgesetzt für das Bauen und Testen von SCISP als Gesamtanwendung.',
					'Konfiguration, Setup und Integration von Keycloak.',
					'Abstimmung mit anderen Abteilungen um den zukunftssicheren Einsatz von gemeinsamen Datenmodellen, Bibliotheken und Prozessen zu gewährleisten',
				],
				tools: [
					'Gitlab Pipelines',
					'Keycloak, NextAuth',
					'Functional Programming',
					'Domain Driven Design',
					'Docker, Ansible, Nomad',
					'Turborepo, pnpm',
					'eslint, prettier, sonarqube',
					'Pair Programming & Code Reviews',
					'Test-Driven Development',
				],
				programming: [
					'React, Next',
					'ChakraUI, Mantine, TailwindCSS',
					'Typescript, HTML, CSS, SQL',
					'Vitest, Jest',
					'OpenLayers',
				],
			},
		],
	},
	{
		name: 'GPS GmbH',
		objective: (
			<p>
				Ein innovatives Startup, welches sich auf die Transparenz und
				Optimierung industrieller Prozesse spezialisiert hat. Mit ihren
				Lösungen analysieren sie den tatsächlichen Ablauf von Maschinen,
				Systemen und Produktionsprozessen und liefern leicht
				verständliche Handlungsempfehlungen zur Steigerung der
				Performance und Vermeidung von Stillständen. Durch ihre
				umfassende Expertise in Maschinen- und Anlagenbau, Forschung,
				Robotik sowie der Geräte- und Softwareentwicklung ermöglichen
				sie Unternehmen, ihre Produktivität nachhaltig zu verbessern.
			</p>
		),
		timespan: '01.10.2017 – 31.01.2023',
		assignments: [
			{
				customer: 'SICON.OS',
				timespan: '01.10.2017 – 31.01.2023',
				role: 'Full-Stack Lead Developer, DevOps Engineer',
				objective: (
					<p>
						Entwicklung der IIoT-Komplettlösung SICON.OS, einem
						Industrial IoT Edge Computing Gateway, welches eine
						umfassende Sammlung, Verarbeitung und Visualisierung von
						IoT-Daten aus Geräten wie Robotern, Sensoren und Anlagen
						ermöglicht. Durch Datenanalyse sollen Aussagen zu Energy
						Monitoring, Predictive Maintenance und Condition
						Monitoring ermöglicht werden, sowie eine eindeutige
						Geräte Identifikation zu schaffen und Remote
						Gerätesteuerung.
					</p>
				),
				tasks: [
					'Konzeption, Betreuung, Entwicklung der IIoT-Plattform SICON.OS zur Realisierung von Industrie 4.0.',
					'Anbindung verschiedener Industrieprotokolle wie IO-Link, Simatic, Modbus, Profibus, MQTT',
					'Entwicklung standardisierter Schnittstellen um die Daten verschiedenster Quellen und Formate zu harmonisieren',
					'Integration von Datenquellen wie SQL-Datenbanken, HTTP-Rest-Schnittstellen, MQTT via WebSocket und GraphQL',
					'Konzept und Entwicklung verschiedener Apps um die Daten zu visualisieren',
					'Implementierung eines Entwicklerportals, App-Stores und Schnittstellen zum Einbinden beliebiger Geräte und Apps',
					'Einführung von Unit-, und End2End-Tests, Linting und Code Formatter',
					'Einführung einer CI Pipeline zum Bauen, Testen und Deployen der Anwendungen',
					'Modernisierung alter Code Basen sowie Dokumentation',
					'Einführung von versionierten Schnittstellendokumentation mit OpenAPI und AsyncAPI',
				],
				tools: [
					'Domain Driven Design, Functional Programming',
					'CQRS, Vertical Slice',
					'Jenkins, GitLab Pipelines, Docker',
					'Jest, Cypress',
					'MariaDB, Prisma',
					'eslint, prettier, sonarqube',
				],
				programming: [
					'Vue, Vuetify, Nuxt, TailwindCSS',
					'NodeJS, Express',
					'TypeScript, HTML, CSS',
					'Bash',
					'SQL',
				],
			},
			{
				customer: 'SICON.ECO',
				timespan: '01.05.2018 – 31.01.2023',
				role: 'Full-Stack Lead Developer, DevOps Engineer',
				objective: (
					<p>
						Ziel von SICON.ECO ist der Aufbau eines umfassenden
						Produkt Ökosystems für SICON.OS - eine Hard-, und
						Software Lösung um eine Vielzahl von industriellen
						Sensordaten zu erfassen und zu verarbeiten. Für eine
						zentrale Plattform für den Betrieb und die Verwaltung
						sollen diverse Microservices auf einem VPS zur Verfügung
						gestellt werden. Hierzu gehören die Bereitstellung eines
						Third-Party-App-Stores für SICON.OS, Docker-Registry,
						Help Centers mit Dokumentationen zur
						Nutzerunterstützung, zentralisierte Sensor und Device
						Monitoring Lösung zur Überwachung des Gerätestatus,
						Produktverwaltungsportal, Durchsuchbare
						Gerätespezifikationen sowie eines VPN-Servers für Remote
						SSH Wartung.
					</p>
				),
				tasks: [
					'Aufbau und Konzept einer Microservice Infrastruktur',
					'Leitung der Ausführung der Entwicklung der Anwendungen sowie Dokumentation',
					'Administrierung und Monitoring der Microservices',
				],
				tools: [
					'Docker, Docker compose, Docker registry',
					'Grafana, InfluxDB, Telegraf',
					'Vuepress',
					'PIM Core',
				],
				programming: [
					'Vue, Nuxt, TypeScript, Next, HTML, CSS',
					'NodeJS',
					'Strapi CMS',
					'Bash',
				],
			},
			{
				customer: 'Still GmbH - Fleetmanagement',
				role: 'Full-Stack Developer, DevOps Engineer',
				timespan: '01.10.2019 – 30.09.2020',
				objective: '',
				tasks: [
					'Konzeption und Entwicklung einer Lösung zur Echtzeitüberwachung von beweglichen Industrie-Assets (AGVs).',
					'Überwachung und Reduktion von Unfällen in automatisierten industriellen Umgebungen.',
					'Visualisierung des Shopfloors mit zuschaltbaren Sichten für die 5G-Netzwerkabdeckung als Heatmap.',
					'Darstellung von Details zum Zustand der AGVs, einschließlich Events und Produktbeschreibungen.',
					'Implementierung von Filter- und Suchfunktionen zur Anzeige bestimmter Zeitabschnitte.',
					'Entwicklung einer Replay-Funktion zur Wiedergabe vergangener Daten.',
				],
				tools: [
					'GitLab Pipelines',
					'Docker, Docker compose',
					'Agile Development (SCRUM)',
					'Jira, Confluence',
				],
				programming: [
					'TypeScript',
					'NodeJS',
					'VueJS',
					'Leaflet',
					'NodeJS',
					'MariaDB',
					'MQTT',
				],
			},
			{
				customer: 'Bosch GmbH - Sensor Anomaliedetektion',
				timespan: '01.10.2019 – 30.09.2020',
				role: 'Full-Stack Developer, DevOps Engineer',
				objective: (
					<p>
						Konzipierung und Entwicklung einer Softwarelösung zur
						Real-Time Überwachung von Sensor Anomalie Detektion im
						Rahmen des Förderprojekts Industrial Communications for
						Factories, welches vom Bundesministerium für Wirtschaft
						beauftragt wurde. Der Fokus lag hierbei auf die
						Auswertung von Audio Signalen, mit dessen Hilfe Ausfälle
						von Maschinen vorhergesehen werden können. Die
						Visualisierung stellte den Shopfloor mit Sensor
						Ausschlag Heatmap und den Geräten dar. UI Elemente wie
						Event-Streams, Sensordaten Vergleiche und Identifikation
						helfen bei der Auswertung.
					</p>
				),
				tasks: [
					'Konzept und Entwicklung einer Lösung für die Darstellung von Sensoranomalien.',
					'Visualisierung des Shopfloors mit einer Anomalie-Heatmap, Gerätezuordnung, Eventstreams und Lokalisierung.',
					'Entwicklung der  wie z.B. Replay Zeitstrahl, 2D Karten, Devicelisten und Eventlisten.',
					'Zusammenarbeit mit Domain Experten und interdisziplinären Teams.',
				],
				tools: [
					'Agile Development',
					'GitLab Pipelines, Jenkins',
					'Docker, Siemens Tenent Network',
					'MariaDB',
					'ECharts, Chart.js',
				],
				programming: [
					'TypeScript',
					'NodeJS, VueJS, Nuxt',
					'HTML, CSS',
					'SQL',
					'LeafletJS',
				],
			},
		],
	},
	{
		name: 'K15t Software GmbH',
		objective: '',
		timespan: '01.02.2016 – 30.09.2017',
		assignments: [
			{
				customer: '',
				role: 'Frontend Developer',
				timespan: '',
				objective: (
					<p>
						K15t ist ein Atlassian Platinum Solution Partner und
						entwickelt Add-ons für den Atlassian Extension Store mit
						Fokus auf Jira und Confluence. Zielsetzung war die
						Entwicklung von den Add-Ons Scroll Viewport, HTML
						Export, PDF Export und ImageMap sowie
						Dokumentationskomplettlösungen und Help-Center.
					</p>
				),
				tasks: [
					'Gestaltung der Internetpräsenz in enger Abstimmung mit dem Marketing und Design Team',
					'Entwicklung und Wartung von neuen Produkten und Add-ons für das Atlassian Ecosystem',
					'Konzeption und Entwicklung der Dokumentation (Help Center)',
					'Third-Level-Support für Nutzer der Add-Ons mit ZenDesk',
					'Teilnahme an Hackathons und Wissensweitergabe durch Vorträge zu Software Entwicklungsthemen',
				],
				tools: [
					'Agile Development (SCRUM)',
					'Jira, Confluence, ZenDesk',
					'BitBucket',
				],
				programming: [
					'Angular',
					'HTML, CSS, TypeScript',
					'Java, Atlassian SDK',
					'SQL, MySQL',
				],
			},
		],
	},
	{
		name: 'E & E Commerce GmbH',
		objective: '',
		timespan: '01.06.2015 – 31.01.2016',
		assignments: [
			{
				role: 'Full-Stack Developer',
				customer: '',
				timespan: '',
				objective: (
					<p>
						Bau einer Web-basierten Lösung für kooperatives
						Videomarketing auf verteilten Rechnern. Das Produkt
						Pretecsy soll es seinen Kunden erlauben auf ein Netzwerk
						von Partner-Displays zuzugreifen, um Werbung zu
						schalten. Mit der Produktplattform hat der Kunde eine
						Übersicht von Werbeflächen über eine Karte zur Verfügung
						und kann seine Werbeclips darüber buchen. Die
						Werbeanzeigen können hochgeladen werden oder über einen
						web-basierten Video-Editor gestaltet werden. Weiterhin
						soll die Plattform über ein Kundenmanagement und
						Usermanagement verfügen.
					</p>
				),
				tasks: [
					'Entwicklung und Design der Werbeplattform Pretecsy.',
					'Wartung und Systemadministration der Plattform.',
					'Konzeption eines webbasierten Videoeditors und interaktiver Karte.',
					'Abstimmung mit Kunden um die Software den Kundenwünschen anzupassen.',
				],
				tools: ['ffmpeg', 'Google Maps API', 'Bare Metal Server'],
				programming: [
					'LAMP Stack Linux, Apache, MySQL, PHP',
					'HTML, CSS, JavaScript',
					'JavaScript, RiotJS, jQuery',
					'SQL, MySQL',
				],
			},
		],
	},
	{
		name: 'Cashpoint Sportwetten',
		objective: '',
		timespan: '01.11.2014 – 31.04.2015',
		assignments: [
			{
				customer: '',
				role: 'Full-Stack Developer',
				timespan: '',
				objective: (
					<p>
						Als Teil des In-House Entwicklungsteams von Cashpoint,
						entwickelten wir Tools für die Übersetzung von allen
						Webseiten und Anwendungen der Cashpoint Sportwetten.
						Weitere Tools wie User Management via LDAP und
						Verwaltung von Kundendatenbanken CRM.
					</p>
				),
				tasks: [
					'Frontend und Backend Mitentwicklung der In-House Anwendungen in Abstimmung mit Domain Experten und Stakeholdern',
					'Entwicklung von HTTP Schnittstellen für interne Anwendungen',
					'Konzept und Design der Anwendungen sowie Umsetzung auf Basis von internen Angaben',
					'Datenbank Design, Migration und Vertwaltung',
				],
				tools: ['Agile Development (SCRUM)', 'Docker', 'SVN'],
				programming: [
					'AngularJs',
					'HTML, CSS, JavaScript',
					'PHP, Yii 2',
					'SQL, MySQL',
				],
			},
		],
	},
	{
		name: 'B&G Consulting & Commerce GmbH',
		objective: '',
		timespan: '01.08.2013 – 31.04.2014',
		assignments: [
			{
				customer: '',
				role: 'Webdeveloper, 2nd & 3rd Level Support',
				timespan: '',
				objective: (
					<p>
						BGCC baut die Softwarelösung und Onlineplattform für
						Immobilienverwaltung und Anzeigeschaltungen JustImmo.
						Das Produkt lässt Immobilienmakler sich online
						präsentieren via individueller Webseiten die BGCC für
						die Kunden entwickelt, sowie die Verteilung der
						Immobilienanzeigen auf diversen Plattformen.
					</p>
				),
				tasks: [
					'Betreuung existierender Webseiten sowie Neuentwicklung von Kundenwebseiten',
					'Weiterentwicklung und Bugfixing der JustImmo Plattform auf Basis von Kunden und Stakeholder Input',
					'Beratung, Präsentation sowie 2nd und 3rd Level Support für Nutzer der Plattform',
				],
				tools: ['Agile Development (SCRUM)', 'Docker', 'SVN'],
				programming: [
					'HTML, CSS, JavaScript',
					'jQuerz, Normalize, Bootstrap',
					'PHP, Symfony',
					'SQL, MySQL',
				],
			},
		],
	},
	{
		name: 'Neuherz & Partner GmbH',
		objective: '',
		timespan: '',
		assignments: [
			{
				customer: 'Neuherz & Partner GmbH',
				role: 'Webdeveloper, 2nd & 3rd Level Support',
				timespan: '01.08.2013 – 31.04.2014',
				objective: (
					<p>
						Webseiten und Werbeagentur mit Fokus auf
						Contentmanagement, Branding, Verpackungen,
						Werbekampagnen, und Onlione-Shops.
					</p>
				),
				tasks: [
					'Betreuung existierender Webseiten sowie Neuentwicklung von Kundenwebseiten',
					'Entwicklung und Design der In-House Anwendung für die Verwaltung von Kundendaten, Projekten und Rechnungen',
					'Beratung, Präsentation sowie 2nd und 3rd Level Support für Nutzer der Plattform',
				],
				tools: ['Agile Development (SCRUM)', 'Docker', 'SVN'],
				programming: [
					'HTML, CSS, JavaScript',
					'jQuerz, Normalize, Bootstrap',
					'PHP, Symfony',
					'SQL, MySQL',
				],
			},
		],
	},
]
