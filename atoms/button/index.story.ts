import button, { Props } from './index'
import { Meta, StoryFn } from '@storybook/html'

export const Primary: StoryFn<Props> = button.bind({})
Primary.args = {
  disabled: false,
  text: 'Click Me',
}

const meta: Meta = {
  title: 'button',
}

export default meta
