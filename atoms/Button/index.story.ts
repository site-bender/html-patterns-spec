import { Meta, StoryFn } from "@storybook/html"
import Button, { Props } from "./index"

export const Primary: StoryFn<Props> = Button.bind({})

Primary.args = {
	disabled: false,
	text: "Click Me",
}

const meta: Meta = {
	title: "Button",
}

export default meta
