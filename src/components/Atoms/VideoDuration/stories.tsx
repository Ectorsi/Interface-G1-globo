import { Story, Meta } from '@storybook/react/types-6-0';
import VideoDuration from '.';

export default {
  title: 'Atoms/VideoDuration',
  component: VideoDuration,
} as Meta;

export const Default: Story = (args) => {
  return (
    <div style={{ maxWidth: '360px', margin: '0 auto' }}>
      <VideoDuration {...args} videoDuration={38499} />
    </div>
  );
};
