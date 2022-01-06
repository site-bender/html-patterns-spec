import { Meta, StoryFn } from '@storybook/html'
import button, { Props } from './index'

export const Primary: StoryFn<Props> = button.bind({})
Primary.args = {
	disabled: false,
	text: 'Click Me',
}

const meta: Meta = {
	title: 'button',
}

export default meta
