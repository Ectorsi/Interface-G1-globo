import { Story, Meta } from '@storybook/react/types-6-0';
import Divider from '.';

export default {
  title: 'Atoms/Divider',
  component: Divider,
} as Meta;

export const Default: Story = () => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Divider />
  </div>
);
