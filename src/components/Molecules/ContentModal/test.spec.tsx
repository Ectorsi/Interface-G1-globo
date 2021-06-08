import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import ContentModal from '.';

const mockedHandleOpen = jest.fn();

describe('ContentModal component', () => {
  it('should be able to render a ContentModal', () => {
    const { getByTestId } = render(
      <ContentModal
        handleOpen={mockedHandleOpen}
        title="Content Modal"
        videoPath="#"
      />
    );

    const ContentModalElement = getByTestId('ContentModal');

    expect(ContentModalElement.onload);
  });

  it('should be able to close the ContentModal', () => {
    const { getByTestId } = render(
      <ContentModal
        handleOpen={mockedHandleOpen}
        title="Content Modal"
        videoPath="#"
      />
    );

    const ContentModalElement = getByTestId('ContentModal');
    const btnCloseModal = getByTestId('BtnCloseModal');

    fireEvent.click(btnCloseModal);

    expect(ContentModalElement.onclose);
  });
});
