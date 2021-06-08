import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import BtnSeeMore from '.';

describe('BtnSeeMore component', () => {
  it('should be able to render a BtnSeeMore', () => {
    const { getByTestId } = render(<BtnSeeMore />);

    const BtnSeeMoreElement = getByTestId('BtnSeeMore');

    expect(BtnSeeMoreElement.onload);
  });
});
