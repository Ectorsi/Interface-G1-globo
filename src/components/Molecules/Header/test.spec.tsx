import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from '.';

describe('Header component', () => {
  it('should be able to render a Header', () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId('Header'));
  });

  it('should be able to render a conditional img', () => {
    const { getByTestId } = render(<Header isMobile />);

    expect(getByTestId('Header'));
  });
});
