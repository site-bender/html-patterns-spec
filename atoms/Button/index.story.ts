import Button, {ButtonProps} from './index'
import { Meta, StoryFn } from '@storybook/html';

export const Primary: StoryFn<ButtonProps> = Button.bind({})
Primary.args = {
  disabled: false,
  text: 'Click Me',
}

const meta: Meta =  {
  title: 'button',
}

export default meta
