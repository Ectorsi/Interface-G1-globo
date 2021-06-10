// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import BtnSeeMore from '.';

export default {
  title: 'Molecules/BtnSeeMore',
  component: BtnSeeMore,
} as Meta;

export const Default: Story = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <BtnSeeMore onClick={() => console.log('clicou aqui')} />
  </div>
);
