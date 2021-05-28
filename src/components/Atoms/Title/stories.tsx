import { Story, Meta } from '@storybook/react/types-6-0';
import Title, { TitleProps } from '.';

export default {
  title: 'Atoms/Title',
  component: Title,
} as Meta;

export const Default: Story<TitleProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Title {...args} />
  </div>
);
