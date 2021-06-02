// eslint-disable-next-line no-use-before-define
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import Description from '.';

export default {
  title: 'Atoms/Description',
  component: Description,
} as Meta;

export const Default: Story = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Description text="Description component" />
  </div>
);
