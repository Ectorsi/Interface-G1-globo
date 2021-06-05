import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Thumbnail from '.';

describe('Thumbnail component', () => {
  it('should be able to render a Thumbnail component', () => {
    const { getByTestId } = render(<Thumbnail videoDuration={3600} />);

    expect(getByTestId('Thumbnail').textContent).toBe('1h');
  });
});
