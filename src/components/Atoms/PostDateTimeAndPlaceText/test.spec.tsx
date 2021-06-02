import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PostDateTimeAndPlaceText from '.';

describe('PostDateTimeAndPlaceText component', () => {
  it('should be able to render the PostDateTimeAndPlaceText component with the props a few seconds ago', () => {
    const dateTime = new Date();

    dateTime.setHours(dateTime.getHours() - 3);

    const currentDate = String(dateTime);
    const { getByTestId } = render(
      <PostDateTimeAndPlaceText duration={currentDate} newsSource="G1" />
    );

    expect(getByTestId('PostDateTimeAndPlaceText').textContent).toBe(
      ' em menos de um minuto — G1'
    );
  });

  it('should be able to render the PostDateTimeAndPlaceText component with the prop in one minute ago', () => {
    const dateTime = new Date();

    dateTime.setHours(dateTime.getHours() - 3);
    dateTime.setMinutes(dateTime.getMinutes() - 1);

    const currentDate = String(dateTime);
    const { getByTestId } = render(
      <PostDateTimeAndPlaceText duration={currentDate} newsSource="G1" />
    );

    expect(getByTestId('PostDateTimeAndPlaceText').textContent).toBe(
      ' em 1 minuto — G1'
    );
  });

  it('should be able to render the PostDateTimeAndPlaceText component with the prop in one hour ago', () => {
    const dateTime = new Date();

    dateTime.setHours(dateTime.getHours() - 4);

    const currentDate = String(dateTime);
    const { getByTestId } = render(
      <PostDateTimeAndPlaceText duration={currentDate} newsSource="G1" />
    );

    expect(getByTestId('PostDateTimeAndPlaceText').textContent).toBe(
      ' em cerca de 1 hora — G1'
    );
  });

  it('should be able to render the PostDateTimeAndPlaceText component with the prop in one day ago', () => {
    const dateTime = new Date();

    dateTime.setHours(dateTime.getHours() - 3);
    dateTime.setMinutes(dateTime.getMinutes() - 4);
    dateTime.setDate(dateTime.getDate() - 1);

    const currentDate = String(dateTime);
    const { getByTestId } = render(
      <PostDateTimeAndPlaceText duration={currentDate} newsSource="G1" />
    );

    expect(getByTestId('PostDateTimeAndPlaceText').textContent).toBe(
      ' em 1 dia — G1'
    );
  });

  it('should be able to render the PostDateTimeAndPlaceText component with the prop in one week ago', () => {
    const dateTime = new Date();

    dateTime.setHours(dateTime.getHours() - 3);
    dateTime.setMinutes(dateTime.getMinutes() - 4);
    dateTime.setDate(dateTime.getDate() - 1);
    dateTime.setDate(dateTime.getDate() + 8);

    const currentDate = String(dateTime);
    const { getByTestId } = render(
      <PostDateTimeAndPlaceText duration={currentDate} newsSource="G1" />
    );

    expect(getByTestId('PostDateTimeAndPlaceText').textContent).toBe(
      ' há 7 dias — G1'
    );
  });

  it('should be able to render the PostDateTimeAndPlaceText component with the prop in one moth ago', () => {
    const dateTime = new Date();

    dateTime.setHours(dateTime.getHours() - 3);
    dateTime.setMinutes(dateTime.getMinutes() - 4);
    dateTime.setDate(dateTime.getDate() - 1);
    dateTime.setMonth(dateTime.getMonth() - 1);

    const currentDate = String(dateTime);
    const { getByTestId } = render(
      <PostDateTimeAndPlaceText duration={currentDate} newsSource="G1" />
    );

    expect(getByTestId('PostDateTimeAndPlaceText').textContent).toBe(
      ' em cerca de 1 mês — G1'
    );
  });

  it('should be able to render the PostDateTimeAndPlaceText component with the prop in one year ago', () => {
    const dateTime = new Date();

    dateTime.setHours(dateTime.getHours() - 3);
    dateTime.setMinutes(dateTime.getMinutes() - 4);
    dateTime.setDate(dateTime.getDate() - 1);
    dateTime.setMonth(dateTime.getMonth() - 1);
    dateTime.setFullYear(dateTime.getFullYear() - 1);

    const currentDate = String(dateTime);
    const { getByTestId } = render(
      <PostDateTimeAndPlaceText duration={currentDate} newsSource="G1" />
    );

    expect(getByTestId('PostDateTimeAndPlaceText').textContent).toBe(
      ' em cerca de 1 ano — G1'
    );
  });
});
