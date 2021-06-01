import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardSubjectVertical from '.';

describe('CardSubjectVertical component', () => {
  it('should be able to render a CardSubjectVertical on default mode', () => {
    const { getByTestId } = render(
      <CardSubjectVertical title="title CardSubjectVertical" />
    );

    expect(getByTestId('Button-CardSubjectVertical').textContent).toBe(
      'title CardSubjectVertical'
    );
  });

  it('should be able to render a CardSubjectVertical with prop label', () => {
    const { getByTestId } = render(
      <CardSubjectVertical
        title="title CardSubjectVertical"
        label="label test"
      />
    );
    const titleFromCardSubjectVertical = getByTestId('title');
    expect(titleFromCardSubjectVertical.textContent).toBe(
      'title CardSubjectVertical'
    );

    const labelFromCardSubjectVertical = getByTestId('label');
    expect(labelFromCardSubjectVertical.textContent).toBe('label test');
  });

  it('should be able to render a CardSubjectVertical with prop description', () => {
    const { getByTestId } = render(
      <CardSubjectVertical
        title="title CardSubjectVertical"
        description="description test"
      />
    );

    const titleFromCardSubjectVertical = getByTestId('title');
    expect(titleFromCardSubjectVertical.textContent).toBe(
      'title CardSubjectVertical'
    );

    const descriptionFromCardSubjectVertical = getByTestId('description');
    expect(descriptionFromCardSubjectVertical.textContent).toBe(
      'description test'
    );
  });

  it('should be able to render a CardSubjectVertical with all props', () => {
    const { getByTestId } = render(
      <CardSubjectVertical
        title="title CardSubjectVertical"
        label="label test"
        description="description test"
        imageURL="https://fakeUrlImage.com"
        isTextWhite
      />
    );

    const titleFromCardSubjectVertical = getByTestId('title');
    expect(titleFromCardSubjectVertical.textContent).toBe(
      'title CardSubjectVertical'
    );

    const labelFromCardSubjectVertical = getByTestId('label');
    expect(labelFromCardSubjectVertical.textContent).toBe('label test');

    const descriptionFromCardSubjectVertical = getByTestId('description');
    expect(descriptionFromCardSubjectVertical.textContent).toBe(
      'description test'
    );
  });
});
