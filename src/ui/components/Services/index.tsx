import {
  Service,
  ServiceDescription,
  ServiceImageBox,
  ServicesBox,
  ServicesContainer,
  ServicesContainerWrapper,
  ServicesTitle,
  ServiceText,
  ServiceTitle
} from './ServicesStyles'

import Image from 'next/image'
import { useContext } from 'react'
import { LanguagesContext } from 'contexts/LanguagesContext'

import strings from '../../../languages/language'

interface IService {
  title: string
  titleBorderColor: string
  description: string
  image: string
}

const Services = () => {
  const {
    selectedLanguage
  }: { selectedLanguage: 'pt-BR' | 'en-EN' } = useContext(LanguagesContext)

  const servicesStrings = strings[selectedLanguage].services

  const services: Array<IService> = [
    {
      image: 'ProjectManagement',
      title: servicesStrings.first_service.title,
      titleBorderColor: '45B20E',
      description: servicesStrings.first_service.description
    },

    {
      image: 'DigitalTransformation',
      title: servicesStrings.second_service.title,
      titleBorderColor: '00ADCC',
      description: servicesStrings.second_service.description
    },

    {
      image: 'Outsourcing',
      title: servicesStrings.third_service.title,
      titleBorderColor: 'F2C604',
      description: servicesStrings.third_service.description
    },

    {
      image: 'HeadHunting',
      title: servicesStrings.fourth_service.title,
      titleBorderColor: 'A51C92',
      description: servicesStrings.fourth_service.description
    }
  ]

  return (
    selectedLanguage && (
      <ServicesContainerWrapper>
        <ServicesContainer>
          <ServicesTitle>{servicesStrings.title}</ServicesTitle>
          <ServicesBox data-testid="services-box">
            {services.map(
              ({ title, titleBorderColor, description, image }, index) => {
                const isOdd = index % 2 !== 0

                return (
                  <Service key={title}>
                    <ServiceImageBox>
                      <Image
                        src={`/img/${image}.svg`}
                        layout="intrinsic"
                        width={110}
                        height={80}
                      />
                    </ServiceImageBox>
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
      </ServicesContainerWrapper>
    )
  )
}

export default Services
