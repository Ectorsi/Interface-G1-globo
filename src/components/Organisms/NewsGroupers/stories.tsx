// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import NewsGroupers from '.';

export default {
  title: 'Organisms/NewsGroupers',
  component: NewsGroupers,
} as Meta;

export const Default: Story = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <NewsGroupers />
  </div>
);
