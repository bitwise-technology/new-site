import {
  Service,
  ServiceDescription,
  ServicesBox,
  ServicesContainer,
  ServicesTitle,
  ServiceText,
  ServiceTitle
} from './ServicesStyles'

import Image from 'next/image'

interface IService {
  title: string
  titleBorderColor: string
  description: string
  image: string
}

const Services = () => {
  const services: Array<IService> = [
    {
      image: 'ProjectManagement',
      title: 'Projeto Gerenciados',
      titleBorderColor: '45B20E',
      description:
        'Co-criamos soluções personalizadas em parceria com seu time. Melhoramos processos internos e garantimos a execução de projetos no prazo necessário.'
    },

    {
      image: 'DigitalTransformation',
      title: 'Transformação Digital',
      titleBorderColor: '00ADCC',
      description:
        'Contamos com especialistas em diversas areas (UX/UI, PM, Devops, Arquitetos e Desenvolvedores atuando com metodologia ágeis e constante acompanhamento de performance.'
    },

    {
      image: 'Outsourcing',
      title: 'Outsourcing',
      titleBorderColor: 'F2C604',

      description:
        'Garantimos uma equipe de alto nível em seu projeto.Elimine custos fixos, compartilhe conhecimento, atinja e alcance resultados reais.'
    },

    {
      image: 'HeadHunting',
      title: 'HeadHunting',
      titleBorderColor: 'A51C92',
      description:
        'Entregamos profissionais com fit adequado ao seu projeto, através de um processo de recrutamento ágil e especializado.'
    }
  ]

  return (
    <ServicesContainer>
      <ServicesTitle>Nossos Serviços</ServicesTitle>
      <ServicesBox data-testid="services-box">
        {services.map(
          ({ title, titleBorderColor, description, image }, index) => {
            const isOdd = index % 2 !== 0

            return (
              <Service key={title}>
                <Image
                  src={`/img/${image}.svg`}
                  layout="intrinsic"
                  width={100}
                  height={70}
                />
                <ServiceText style={{ order: isOdd ? -1 : 1 }}>
                  <ServiceTitle titleBorderColor={titleBorderColor}>
                    {title}
                  </ServiceTitle>
                  <ServiceDescription>{description}</ServiceDescription>
                </ServiceText>
              </Service>
            )
          }
        )}
      </ServicesBox>
    </ServicesContainer>
  )
}

export default Services
