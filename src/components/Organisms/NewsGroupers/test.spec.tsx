import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NewsGroupers from '.';

describe('NewsGroupers component', () => {
  it('should be able to render a NewsGroupers', () => {
    const { getByTestId } = render(<NewsGroupers />);

    const NewsGroupersElement = getByTestId('NewsGroupers');

    expect(NewsGroupersElement.onload);
  });
});
