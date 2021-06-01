import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Live from '.';

describe('Live component', () => {
  it('should be able to render a Live component', () => {
    const { getByTestId } = render(<Live />);

    expect(getByTestId('live').textContent).toBe('AO VIVO');
  });
});
