import { Skill } from '../types'

type SkillRenderProps = Skill
export const SkillRender = (props: SkillRenderProps) => {
	return (
		<div className="flex items-center my-2">
			<div className="w-8/12">{props.name}</div>
			<div className="w-4/12 bg-rose-200 h-4 rounded-full relative text-xs text-gray-600">
				<div
					className="bg-white absolute top-0 left-0 h-full rounded-full"
					style={{ width: `${props.level}%` }}
				/>
				{/* {[...Array(props.level)].map((_, i) => (
                <div
                    key={i}
                    className={`bg-white relative h-full w-1/5  border-rose-200  ${
                        i !== 4 ? 'border-r-2' : ''
                    }`}
                />
            ))} */}
				<div className="absolute px-2 text-xs">
					{props.years} Jahr{props.years === 1 ? '' : 'e'}
				</div>
			</div>
		</div>
	)
}
