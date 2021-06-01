import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Label from '.';

describe('Label component', () => {
  it('should be able to render a label', () => {
    const { getByTestId } = render(<Label text="qualquer label" />);

    expect(getByTestId('label').textContent).toBe('qualquer label');
  });
});
