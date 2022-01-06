import html from '../../uhtml.config'

export type Props = {
	disabled: boolean
	text: string
}

export default function button({ disabled, text }: Props) {
	const log = () => console.log('Clicked')

	return html`
		<button disabled=${disabled || undefined} class="clickable" onclick=${log}>
			${text}
		</button>
	`
}
