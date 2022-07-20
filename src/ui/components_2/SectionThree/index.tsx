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
      {/* <MobileContainer>
        <Title data-aos="fade-up">Transformação Digital</Title>
        <Sub data-aos="fade-up">
          Contamos com especialistas nas áreas de{' '}
          <b>
            User Experience, User Interface, Project Management, Arquitetos,
            DevOps e Desenvolvedores,{' '}
          </b>
          atuando com metodologias ágeis e constante acompanhamento de
          performance.
        </Sub>
        <Image
          data-aos="fade-up"
          width={328}
          src="/img/VecteezyPeople.svg"
          alt="Logo da bitwise"
        />
      </MobileContainer> */}
    </>
  )
}

export { SectionThree }
