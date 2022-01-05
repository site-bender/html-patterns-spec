import {html} from 'uhtml'

export type ButtonProps = {
    disabled: boolean,
    text: string
}

export default function Button({disabled, text}: ButtonProps) {
  const log = () => console.log('Clicked')

  return html.node`
    <button
            .disabled="${disabled}"
            class="clickable"
            onclick="${log}"
    >
        ${text}
    </button>
  `
}
