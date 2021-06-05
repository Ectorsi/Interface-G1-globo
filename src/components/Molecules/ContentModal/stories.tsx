// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import ContentModal from '.';

export default {
  title: 'Molecules/ContentModal',
  component: ContentModal,
} as Meta;

export const Default: Story = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <ContentModal
      title="Mônica Salmaso revê amigos e o melhor da música brasileira na série 'Ô de casas'"
      videoPath="www.google.com"
      handleOpen={() => {}}
    />
  </div>
);
