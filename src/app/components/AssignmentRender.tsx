import { headingFont, bodyFont } from '../layout'
import { Assignment } from '../types'

export type AssignmentRenderProps = Assignment
export const AssignmentRender = (props: AssignmentRenderProps) => {
	return (
		<>
			<h4
				className={`my-4 flex justify-between items-center font-bold text-lg ${headingFont.className}`}
			>
				<span>{props.customer}</span>
				<span
					className={`text-base font-normal whitespace-nowrap ${bodyFont.className}`}
				>
					{props.timespan}
				</span>
			</h4>
			<div className="prose prose-sm">
				<p>
					<b>Rolle{props.role.includes(',') ? 'n' : ''}:</b>{' '}
					{props.role}
				</p>
				<div>
					<b>Zielsetzung:</b>
					{props.objective}
				</div>
				<div>
					<b>Aufgaben:</b>
					<ul>
						{props.tasks.map((task, i) => (
							<li key={i}>{task}</li>
						))}
					</ul>
				</div>
				<div className="flex">
					{props.tools.length > 0 && (
						<div
							className={
								props.programming.length > 1 ? `w-1/2` : ''
							}
						>
							<b>Eingesetzte Methoden und Werkzeuge:</b>
							<ul>
								{props.tools.map((tool, i) => (
									<li key={i}>{tool}</li>
								))}
							</ul>
						</div>
					)}
					{props.programming.length > 0 && (
						<div className="w-1/2">
							<b>Programmierung und Frameworks:</b>
							<ul>
								{props.programming.map((p, i) => (
									<li key={i}>{p}</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
