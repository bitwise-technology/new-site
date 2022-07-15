import React from 'react'
import { useLanguage } from '../../../contexts/LanguagesContext'
import strings from '../../../languages/language'
import {
  Center,
  Container,
  Image,
  Left,
  MobileContainer,
  Right,
  Sub,
  Title
} from './styles'

const SectionTwo = () => {
  const { selectedLanguage } = useLanguage()
  const bitwiseInfoStrings = strings[selectedLanguage].services
  return (
    <>
      <Container>
        <Center>
          <Left>
            <Title>{bitwiseInfoStrings.second_service.title}</Title>
            <Sub>{bitwiseInfoStrings.second_service.description}</Sub>
          </Left>
          <Right>
            <img
              width={328}
              src="/img/Outsourcing.svg"
              alt="Logo da bitwise"
              style={{ objectFit: 'cover', flex: 1 }}
            />
          </Right>
        </Center>
      </Container>
    </>
  )
}

export { SectionTwo }
