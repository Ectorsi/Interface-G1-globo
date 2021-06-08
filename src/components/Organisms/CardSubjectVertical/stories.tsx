import { Story, Meta } from '@storybook/react/types-6-0';
import CardSubjectVertical from '.';
import { mockedPage1 } from '../../Templates/Home/mockedData';

export default {
  title: 'Organisms/CardSubjectVertical',
  component: CardSubjectVertical,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <CardSubjectVertical
      title={`
        Equipes buscam desaparecidos 
        da explosão que matou mais de 100 e feriu 4
        mil no Líbano
        `}
      label="Cenário de destrição"
      description={` 
      Suspeita é de que a explosão 
      aconteceu em um depósito de 
      nitrato de amônio, um tipo 
      de fertilizante, na zona 
      portuária de Beirute.`}
      duration="Teste CardSubjectVertical"
      newsSource="Teste CardSubjectVertical"
      {...args}
    />
  </div>
);

export const RightCard: Story = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <CardSubjectVertical
      title={`
        Equipes buscam desaparecidos 
        da explosão que matou mais de 100 e feriu 4
        mil no Líbano
        `}
      isTextWhite
      imageURL="https://ibcdn.canaltech.com.br/8FplhVkDQdAatiUcehCimgkGJlI=/512x288/smart/i257652.jpeg"
      duration="pegar news.created"
      newsSource="pegar news.chapeu"
      {...args}
    />
  </div>
);
