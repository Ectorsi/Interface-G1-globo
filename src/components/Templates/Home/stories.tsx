import { Story, Meta } from '@storybook/react/types-6-0';
import Home from '.';
import { mockedPage1 } from './mockedData';

export default {
  title: 'Template/Home',
  component: Home,
} as Meta;

export const Default: Story = () => <Home news={mockedPage1} />;
