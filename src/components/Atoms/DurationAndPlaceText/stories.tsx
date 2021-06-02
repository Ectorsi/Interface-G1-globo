import { Story, Meta } from '@storybook/react/types-6-0';

// import { getDatePickerValue } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import DurationAndPlaceText from '.';

export default {
  title: 'Atoms/DurationAndPlaceText',
  component: DurationAndPlaceText,
} as Meta;

/**
 * Segundos
 * Minutos
 * Horas
 * Dias
 * Semanas
 * Meses
 * Anos
 *
 */

export const Seconds: Story = () => {
  const dateTime = new Date();

  const utcDate = zonedTimeToUtc(dateTime, 'Europe/Berlin');
  console.log(utcDate, 'CARALHOOOO');
  dateTime.setHours(dateTime.getHours() - 3);

  const currentDate = String(dateTime);

  return (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <DurationAndPlaceText duration={currentDate} newsSource="Globo Esport" />
    </div>
  );
};

export const Minutes: Story = () => {
  const dateTime = new Date();

  dateTime.setHours(dateTime.getHours() - 3);
  dateTime.setMinutes(dateTime.getMinutes() - 1);

  const currentDate = String(dateTime);

  return (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <DurationAndPlaceText duration={currentDate} newsSource="Globo Esport" />
    </div>
  );
};

export const Hour: Story = () => {
  const dateTime = new Date();

  dateTime.setHours(dateTime.getHours() - 4);

  const currentDate = String(dateTime);

  return (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <DurationAndPlaceText duration={currentDate} newsSource="Globo Esport" />
    </div>
  );
};

export const Day: Story = () => {
  const dateTime = new Date();

  dateTime.setHours(dateTime.getHours() - 3);
  dateTime.setMinutes(dateTime.getMinutes() - 4);
  dateTime.setDate(dateTime.getDate() - 1);

  const currentDate = String(dateTime);

  return (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <DurationAndPlaceText duration={currentDate} newsSource="Globo Esport" />
    </div>
  );
};

export const Week: Story = () => {
  const dateTime = new Date();

  dateTime.setHours(dateTime.getHours() - 3);
  dateTime.setMinutes(dateTime.getMinutes() - 4);
  dateTime.setDate(dateTime.getDate() - 1);
  dateTime.setDate(dateTime.getDate() + 8);

  const currentDate = String(dateTime);

  return (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <DurationAndPlaceText duration={currentDate} newsSource="Globo Esport" />
    </div>
  );
};

export const Month: Story = () => {
  const dateTime = new Date();

  dateTime.setHours(dateTime.getHours() - 3);
  dateTime.setMinutes(dateTime.getMinutes() - 4);
  dateTime.setDate(dateTime.getDate() - 1);
  // dateTime.setDate(dateTime.getDate() + 8);

  dateTime.setMonth(dateTime.getMonth() - 1);

  const currentDate = String(dateTime);

  return (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <DurationAndPlaceText duration={currentDate} newsSource="Globo Esport" />
    </div>
  );
};

export const Year: Story = () => {
  const dateTime = new Date();

  dateTime.setHours(dateTime.getHours() - 3);
  dateTime.setMinutes(dateTime.getMinutes() - 4);
  dateTime.setDate(dateTime.getDate() - 1);
  // dateTime.setDate(dateTime.getDate() + 8);

  dateTime.setMonth(dateTime.getMonth() - 1);

  dateTime.setFullYear(dateTime.getFullYear() - 1);

  const currentDate = String(dateTime);

  return (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <DurationAndPlaceText duration={currentDate} newsSource="Globo Esport" />
    </div>
  );
};
