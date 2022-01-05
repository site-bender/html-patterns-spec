import { html } from 'uhtml'

export type Props = {
  disabled: boolean
  text: string
}

export default function button({ disabled, text }: Props) {
  const log = () => console.log('Clicked')

  return html.node`
    <button .disabled=${disabled} class="clickable" onclick=${log} >
      ${text}
    </button>
  `
}
