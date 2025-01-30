import { headingFont, bodyFont } from '../layout'
import { Company } from '../types'
import { AssignmentRender } from './AssignmentRender'
import { Divider } from './Divider'

export type CompanyRenderProps = Company
export const CompanyRender = (props: CompanyRenderProps) => {
	return (
		<>
			<h3
				className={`my-4 flex justify-between items-center font-bold text-xl ${headingFont.className}`}
			>
				<span>{props.name}</span>
				<span className={`text-base font-normal ${bodyFont.className}`}>
					{props.timespan}
				</span>
			</h3>
			{props.objective}
			{props.assignments.map((assignment) => (
				<div key={assignment.customer}>
					<AssignmentRender {...assignment} />
					<Divider className="bg-rose-600" />
				</div>
			))}
		</>
	)
}
