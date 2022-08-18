import React from 'react'
import { useLanguage } from '../../../contexts/LanguagesContext'
import useMediaQuery from '../../../helpers/hooks/useMediaQuery'
import strings from '../../../languages/language'
import { Center, Container, Image, Left, Right, Sub, Title } from './styles'

const SectionThree = () => {
  const matcheMobile = useMediaQuery('(min-width: 680px)')
  const { selectedLanguage } = useLanguage()
  const bitwiseInfoStrings = strings[selectedLanguage].services

  return (
    <>
      <Container>
        <Center>
          {!matcheMobile ? (
            <>
              <Right data-aos="zoom-in">
                <Title>{bitwiseInfoStrings.third_service.title}</Title>
                <Sub
                  dangerouslySetInnerHTML={{
                    __html: bitwiseInfoStrings.third_service.description
                  }}
                ></Sub>
              </Right>
              <Left data-aos="zoom-in">
                <Image src="/img/VecteezyPeople.svg" alt="Logo da bitwise" />
              </Left>
            </>
          ) : (
            <>
              <Left data-aos="zoom-in">
                <Image src="/img/VecteezyPeople.svg" alt="Logo da bitwise" />
              </Left>
              <Right data-aos="zoom-in">
                <Title>{bitwiseInfoStrings.third_service.title}</Title>
                <Sub
                  dangerouslySetInnerHTML={{
                    __html: bitwiseInfoStrings.third_service.description
                  }}
                ></Sub>
              </Right>
            </>
          )}
        </Center>
      </Container>
    </>
  )
}

export { SectionThree }
