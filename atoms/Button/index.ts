import html from "../../uhtml.config"

export type Props = {
	disabled: boolean
	text: string
}

export default function Button({ disabled, text }: Props) {
	const log = () => console.log("Clicked")

	return html`
		<button
			class="clickable"
			disabled="${disabled || undefined}"
			onclick=${log}
		>
			${text}
		</button>
	`
}
