import { Story, Meta } from '@storybook/react/types-6-0';
import CardSubjectHorizontal from '.';

export default {
  title: 'Molecules/CardSubjectHorizontal',
  component: CardSubjectHorizontal,
} as Meta;

// Subject
export const Default: Story = () => {
  const dateTime = new Date();

  dateTime.setHours(dateTime.getHours() - 3);

  const currentDateTime = dateTime.toISOString();

  return (
    <div style={{ maxWidth: '624px', margin: '0 auto' }}>
      <CardSubjectHorizontal
        subjectType="SUBJECT"
        link="www.google.com"
        title="Equipes buscam desaparecidos 
        da explosão que matou mais de 100 e feriu 4
        mil no Líbano"
        duration={currentDateTime}
        newsSource="Vem da API"
        imagePath=""
      />
    </div>
  );
};

export const SubjectGroup: Story = () => {
  const dateTime = new Date();

  dateTime.setHours(dateTime.getHours() - 3);

  const currentDateTime = dateTime.toISOString();

  const mockedSubjectGroup = [
    {
      content: {
        section: 'Especial Publicitário - ENERGISA  ',
        summary:
          'Neste ano, a instituição conta com o patrocínio da Energisa para manutenção do projeto musical',
        title:
          'Concerto marca início das atividades 2020 da Filarmônica Nossa Senhora da Conceição',
        url: 'https://g1.globo.com/se/sergipe/especial-publicitario/energisa/noticia/2020/03/03/concerto-marca-inicio-das-atividades-2020-da-filarmonica-nossa-senhora-da-conceicao.ghtml',
      },
      type: 'materia',
    },
    {
      content: {
        section: 'Especial Publicitário - ENERGISA #2 ',
        summary:
          'Neste ano, a instituição conta com o patrocínio da Energisa para manutenção do projeto musical #2',
        title:
          'Concerto marca início das atividades 2020 da Filarmônica Nossa Senhora da Conceição #2',
        url: 'https://g1.globo.com/se/sergipe/especial-publicitario/energisa/noticia/2020/03/03/concerto-marca-inicio-das-atividades-2020-da-filarmonica-nossa-senhora-da-conceicao.ghtml',
      },
      type: 'materia',
    },
  ];
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
        subjectGroup={mockedSubjectGroup}
        imagePath=""
      />
    </div>
  );
};

export const Video: Story = () => {
  const dateTime = new Date();

  dateTime.setHours(dateTime.getHours() - 3);

  const currentDateTime = dateTime.toISOString();

  return (
    <div style={{ maxWidth: '624px', margin: '0 auto' }}>
      <CardSubjectHorizontal
        subjectType="VIDEO"
        link=""
        title="Equipes buscam desaparecidos 
        da explosão que matou mais de 100 e feriu 4
        mil no Líbano"
        description="Promovidos somente em nome da arte, os encontros virtuais da cantora sobressaem na quarentena pela combinação de  rigor estilístico e informalidade."
        duration={currentDateTime}
        newsSource="Vem da API"
        videoDuration={36000}
        imagePath=""
      />
    </div>
  );
};
