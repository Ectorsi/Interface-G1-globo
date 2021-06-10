import { Story, Meta } from '@storybook/react/types-6-0';
import { useCallback, useState } from 'react';
import Home from '.';
import { mockedPage1, mockedPage2 } from './mockedData';

export default {
  title: 'Template/Home',
  component: Home,
} as Meta;

export const Default: Story = () => {
  const [mockedData, setMockedData] = useState(mockedPage1);

  const [currentPage, setCurrentPage] = useState(1);

  const loadNewPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
    setMockedData([...mockedData, ...mockedPage2]);
  }, [currentPage, mockedData]);

  return <Home news={mockedData} loadNewPage={loadNewPage} />;
};
