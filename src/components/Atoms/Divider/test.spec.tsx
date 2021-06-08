import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Divider from '.';

describe('Divider component', () => {
  it('should be able to render a Divider', () => {
    const { getByTestId } = render(<Divider />);

    const dividerElement = getByTestId('divider');

    expect(dividerElement.onload);
  });
});
