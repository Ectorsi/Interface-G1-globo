import { Story, Meta } from '@storybook/react/types-6-0';
import CardSubjectHorizontal from '.';

export default {
  title: 'Molecules/CardSubjectHorizontal',
  component: CardSubjectHorizontal,
} as Meta;

export const Default: Story = () => {
  const dateTime = new Date();

  // dateTime.setHours(dateTime.getHours() - 3);

  // const currentDate = String(dateTime);

  const currentDateTime = dateTime.toISOString();

  console.log(currentDateTime, 'currentDateTimeeeeeeeee');

  return (
    <div style={{ maxWidth: '624px', margin: '0 auto' }}>
      <CardSubjectHorizontal
        subjectType="SUBJECT_GROUP"
        link="www.google.com"
        title="Equipes buscam desaparecidos 
        da explosão que matou mais de 100 e feriu 4
        mil no Líbano"
        duration={currentDateTime}
        newsSource="Vem da API"
        // {...args}
      />
    </div>
  );
};
