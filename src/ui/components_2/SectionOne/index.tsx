import React, { useMemo } from 'react'
import { useLanguage } from '../../../contexts/LanguagesContext'
import useMediaQuery from '../../../helpers/hooks/useMediaQuery'
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

const SectionOne = () => {
  const matcheMobile = useMediaQuery('(min-width: 680px)')
  // const render = useMemo(() => {
  //   return
  // }, [matcheMobile])
  const { selectedLanguage } = useLanguage()
  const bitwiseInfoStrings = strings[selectedLanguage].services
  return (
    <>
      <div id="bitwise"></div>
      <Container>
        <Center>
          {matcheMobile ? (
            <>
              <Left data-aos="zoom-in">
                <Image src="/img/cropped.png" alt="Logo da bitwise" />
              </Left>
              <Right data-aos="zoom-in">
                <Title>{bitwiseInfoStrings.first_service.title}</Title>
                <Sub>{bitwiseInfoStrings.first_service.description}</Sub>
              </Right>
            </>
          ) : (
            <>
              <Right data-aos="zoom-in">
                <Title>{bitwiseInfoStrings.first_service.title}</Title>
                <Sub>{bitwiseInfoStrings.first_service.description}</Sub>
              </Right>
              <Left data-aos="zoom-in">
                <Image src="/img/cropped.png" alt="Logo da bitwise" />
              </Left>
            </>
          )}
        </Center>
      </Container>
    </>
  )
}

export { SectionOne }
