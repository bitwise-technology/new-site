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

import { useContext } from 'react'
import { LanguagesContext } from '../../../contexts/LanguagesContext'

import strings from '../../../languages/language'

interface IService {
  title: string
  titleBorderColor: string
  description: string
  image: string
  alt: string
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
      alt: servicesStrings.fourth_service.alt,
      titleBorderColor: '45B20E',
      description: servicesStrings.first_service.description
    },

    {
      image: 'DigitalTransformation',
      title: servicesStrings.second_service.title,
      alt: servicesStrings.fourth_service.alt,
      titleBorderColor: '00ADCC',
      description: servicesStrings.second_service.description
    },

    {
      image: 'Outsourcing',
      title: servicesStrings.third_service.title,
      alt: servicesStrings.fourth_service.alt,
      titleBorderColor: 'F2C604',
      description: servicesStrings.third_service.description
    }/* ,

    {
      image: 'HeadHunting',
      title: servicesStrings.fourth_service.title,
      alt: servicesStrings.fourth_service.alt,
      titleBorderColor: 'A51C92',
      description: servicesStrings.fourth_service.description
    } */
  ]

  return (
    selectedLanguage && (
      <ServicesContainerWrapper>
        <ServicesContainer>
          <ServicesTitle>{servicesStrings.title}</ServicesTitle>
          <ServicesBox data-testid="services-box">
            {services.map(
              ({ title, titleBorderColor, description, image, alt }) => {
                return (
                  <Service key={title}>
                    <ServiceImageBox>
                      <img src={`/img/${image}.svg`} alt={alt} />
                    </ServiceImageBox>
                    <ServiceText>
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
