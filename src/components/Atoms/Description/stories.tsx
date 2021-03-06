import { Story, Meta } from '@storybook/react/types-6-0';
import Description from '.';

export default {
  title: 'Atoms/Description',
  component: Description,
} as Meta;

export const Default: Story = () => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Description text="Description component" />
  </div>
);
