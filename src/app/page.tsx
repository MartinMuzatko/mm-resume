import { SlLocationPin, SlPhone } from 'react-icons/sl'
import { VscMail } from 'react-icons/vsc'
import { Divider } from './components/Divider'
import { bodyFont, headingFont } from './layout'
import { SkillRender } from './components/SkillRender'
import { companies, skillGroups, softSkills } from './data'
import { CompanyRender } from './components/CompanyRender'
import { FaHeart, FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'

export default function Home() {
	return (
		<>
			<div className="flex text-lg">
				<div className="w-1/3 grow bg-rose-800 text-white">
					<img src="/me.jpeg" className="w-auto h-[265px]" alt="" />
					<div className="p-4 text-lg text-white">
						<Divider />
						<h3
							className={`font-bold my-4 ${headingFont.className}`}
						>
							Kontakt
						</h3>
						<p className="flex items-center my-2">
							<SlPhone className="mr-4" />{' '}
							{process.env.NEXT_PUBLIC_PHONE}
						</p>
						<a
							href={`mailto:${process.env.NEXT_PUBLIC_LOCATION}`}
							className="flex items-center my-2"
						>
							<VscMail className="mr-4" />{' '}
							{process.env.NEXT_PUBLIC_EMAIL}
						</a>
						<a
							href="https://maps.app.goo.gl/nFSh9PsAUsqrE2oD7"
							className="flex items-center my-2"
						>
							<SlLocationPin className="mr-4" />{' '}
							{process.env.NEXT_PUBLIC_LOCATION}
						</a>
					</div>
					<div className="px-4 text-lg text-white">
						<Divider />
						<h3
							className={`font-bold my-4 ${headingFont.className}`}
						>
							Sprachen
						</h3>
						<p>Deutsch Muttersprache</p>
						<p>Englisch Verhandlungssicher</p>
						<Divider />
						<p
							className={`font-bold my-4 ${headingFont.className}`}
						>
							Wichtige Fähigkeiten
						</p>
						<div>
							{skillGroups.map((skillGroup) => (
								<div key={skillGroup.group} className="my-4">
									<p>
										<b>{skillGroup.group}</b>
									</p>
									{skillGroup.skills.map((skill) => (
										<SkillRender
											{...skill}
											key={skill.name}
										/>
									))}
									<Divider className=" bg-white" />
								</div>
							))}
							<p>
								<b>{softSkills.group}</b>
							</p>
							{softSkills.skills.map((skill) => (
								<div className="my-2" key={skill.name}>
									{skill.name}
								</div>
							))}
							<Divider className="my-4 bg-white" />
						</div>
					</div>
				</div>
				<div className="w-2/3">
					<div className="h-[265px] px-8 flex items-start justify-center flex-col ">
						<h1
							className={`text-6xl pt-8 tracking-wide leading font-bold ${headingFont.className}`}
						>
							Martin <br />
							Muzatko
						</h1>
						<p
							className={`font-bold text-xl text-rose-600 ${headingFont.className}`}
						>
							Senior Full-Stack Developer & Consultancy
						</p>
						<p className="font-base pt-4">
							Mit meiner Expertise in der professionellen
							Anwendungsentwicklung, lasse ich Ihre Ideen zur
							Wirklichkeit werden.
						</p>
					</div>
					<div className="px-8 text-sm py-4">
						<Divider className="bg-rose-600" />
						<h2
							className={`my-4 font-bold text-2xl ${headingFont.className}`}
						>
							Profil
						</h2>
						<div className="prose prose-sm">
							<p>
								Martin Muzatko verfügt über mehr als 15 Jahre
								Erfahrung in der Full-Stack-Entwicklung mit
								Fokus auf Frontend mit React und interaktiven
								Webanwendungen auf Basis verschiedener Frontend-
								und Full-Stack-Frameworks (React, Vue, Next,
								Blitz) und verschiedener Backend-Technologien
								(NodeJS, PHP).
							</p>
							<p>
								Hervorzuheben sind tiefgreifende Erfahrungen in
								agiler Softwareentwicklung, Design und
								Implementierung von Schnittstellensoftware (REST
								API, GraphQL, WebSockets, MQTT), sowie in
								Softwarearchitektur (DDD), Software Testing
								(Vitest, Jest, Cypress, Playwright), DevOps Best
								Practices (Docker Containerisierung von
								Microservices, Zertifikatsmanagement, CI Jobs,
								Hosting, Reverse Proxy, Paket und
								Containerverwaltung, Nexus, SonarQube).
								Ergänzende Erfahrungen umfassen
								Linux-Server-Management, IoT, Mono-Repos (Turbo,
								pnpm), Datenbankmanagement und -modellierung
								(SQL, MariaDB, Prisma) und erste
								Cloud-Erfahrungen (AWS Lambda, Netlify, Deno
								Deploy).
							</p>
						</div>
						<Divider className="bg-rose-600" />
						<h2
							className={`my-4 font-bold text-2xl ${headingFont.className}`}
						>
							Projekterfahrungen
						</h2>
						{companies.map((company) => (
							<CompanyRender key={company.name} {...company} />
						))}
						<h2
							className={`my-4 font-bold text-xl ${headingFont.className}`}
						>
							Ausbildung
						</h2>
						<h2
							className={`my-4 flex justify-between items-center font-bold text-lg ${headingFont.className}`}
						>
							<span>ÖBB - Österreichische Bundesbahnen</span>
							<span
								className={`text-base font-normal ${bodyFont.className}`}
							>
								2008 – 2012
							</span>
						</h2>
						<div className="prose prose-sm">
							<p>
								Ausbildung mit erfolgreichem Abschluss einer
								Gesellenprüfung durch die Österreichische
								Bundesbahn in den Bereichen Funk, Kabelkunde,
								Vermessung, Rechnergestützte Zugsüberwachung,
								Wartung und Entstörung, Rechenzentren,
								Metallbearbeitung, Diverse Protokolle und
								Signalmodulationen (AM, FM, PAM, PCM, PDM, ...),
								Sicherheit, Standards, Elektrotechnik,
								Elektronik und Mikroelektronik
							</p>
						</div>
						<Divider className="bg-rose-600" />
						<div className="py-8 mx-auto flex items-center gap-2">
							Resume Made with{' '}
							<FaHeart className="text-red-600" />{' '}
							<FaReact className="text-sky-400" /> <SiNextdotjs />
							<RiTailwindCssFill className="text-cyan-600" /> by
							Martin Muzatko
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
