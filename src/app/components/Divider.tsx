type DividerProps = {
	className?: string
}
export const Divider = (props: DividerProps) => {
	return (
		<div
			className={`${'w-12 h-[3px] mt-4'} ${
				props.className ?? 'bg-white'
			}`}
		/>
	)
}
