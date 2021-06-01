import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Title from '.';

describe('Title component', () => {
  it('should be able to render a title', () => {
    const { getByTestId } = render(<Title text="qualquer title" />);

    expect(getByTestId('title').textContent).toBe('qualquer title');
  });
});
