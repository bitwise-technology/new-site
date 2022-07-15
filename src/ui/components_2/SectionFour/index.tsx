import React from 'react'
import { useLanguage } from '../../../contexts/LanguagesContext'
import useMediaQuery from '../../../helpers/hooks/useMediaQuery'
import strings from '../../../languages/language'
import { Container, GridContainer, Title } from './styles'

const SectionFour = () => {
  const matcheMobile = useMediaQuery('(min-width: 790px)')

  const { selectedLanguage } = useLanguage()
  const bitwiseInfoStrings = strings[selectedLanguage].partners

  return (
    <>
      <div id="partners"></div>

      <Container>
        <Title data-aos="fade-up">{bitwiseInfoStrings.title}</Title>
        <GridContainer data-aos="fade-up">
          <img
            width={!matcheMobile && 130}
            src="/img/partners_2/Santander.svg"
          />
          <img width={!matcheMobile && 130} src="/img/partners_2/WIzard.svg" />
          <img
            width={!matcheMobile && 130}
            src="/img/partners_2/OBoticario.svg"
          />
          <img width={!matcheMobile && 130} src="/img/partners_2/Newton.svg" />

          <img width={!matcheMobile && 70} src="/img/partners_2/Vector.svg" />
          <img
            width={!matcheMobile && 70}
            src="/img/partners_2/Pao de acucar.svg"
          />
          <img width={!matcheMobile && 70} src="/img/partners_2/FIat.svg" />
          <img width={!matcheMobile && 70} src="/img/partners_2/Net.svg" />

          <img
            width={!matcheMobile && 130}
            src="/img/partners_2/Clinacarx.svg"
          />
          <img width={!matcheMobile && 130} src="/img/partners_2/Doctor.svg" />
          <img width={!matcheMobile && 130} src="/img/partners_2/Facens.svg" />
          <img
            width={!matcheMobile && 130}
            src="/img/partners_2/PersonalMe.svg"
          />
        </GridContainer>
      </Container>
    </>
  )
}

export { SectionFour }
