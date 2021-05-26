// eslint-disable-next-line no-use-before-define
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import Title from '.';

export default {
  title: 'Atoms/Title',
  component: Title,
} as Meta;

export const Default: Story = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Title isHighlight />
  </div>
);
