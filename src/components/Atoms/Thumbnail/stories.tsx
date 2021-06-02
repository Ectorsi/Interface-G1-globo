// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import Thumbnail from '.';

export default {
  title: 'Atoms/Thumbnail',
  component: Thumbnail,
} as Meta;

export const Default: Story = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div style={{ maxWidth: '360px', margin: '0 auto' }}>
    <Thumbnail />
  </div>
);
