import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import VideoDuration from '.';

describe('VideoDuration component', () => {
  it('should be able to render a VideoDuration component case to be hour with minutes', () => {
    const { getByTestId } = render(<VideoDuration videoDuration={38499} />);

    expect(getByTestId('VideoDuration').textContent).toBe('10h42m');
  });

  it('should be able to render a VideoDuration component case to be only hour', () => {
    const { getByTestId } = render(<VideoDuration videoDuration={36000} />);

    expect(getByTestId('VideoDuration').textContent).toBe('10h');
  });

  it('should be able to render a VideoDuration component case to be only minutes', () => {
    const { getByTestId } = render(<VideoDuration videoDuration={360} />);

    expect(getByTestId('VideoDuration').textContent).toBe('6m');
  });
});
