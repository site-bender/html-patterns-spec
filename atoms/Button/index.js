import {html} from 'uhtml'

export default function Button({disabled, text}) {
  const log = () => console.log('clicked')

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
