import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '.';
import { mockedPage1 } from './mockedData';

describe('Home component', () => {
  it('should be able to render a Home', () => {
    const { getByTestId } = render(<Home news={mockedPage1} />);

    const HomeElement = <Home news={mockedPage1} />;

    expect(HomeElement.onload);
  });
});
