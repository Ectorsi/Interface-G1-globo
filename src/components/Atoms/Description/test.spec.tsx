import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Description from '.';

describe('Description component', () => {
  it('should be able to render a description', () => {
    const { getByTestId } = render(<Description text="qualquer descrição" />);

    expect(getByTestId('description').textContent).toBe('qualquer descrição');
  });
});
