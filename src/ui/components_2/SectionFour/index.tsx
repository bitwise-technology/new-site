import React from 'react'
import { useLanguage } from '../../../contexts/LanguagesContext'
import useMediaQuery from '../../../helpers/hooks/useMediaQuery'
import strings from '../../../languages/language'
import { Container, GridContainer, Img, Title } from './styles'

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
          <Img src="/img/partners_2/Santander.svg" />
          <Img src="/img/partners_2/WIzard.svg" />
          <Img src="/img/partners_2/OBoticario.svg" />
          <Img src="/img/partners_2/Newton.svg" />

          <Img value={70} src="/img/partners_2/Vector.svg" />
          <Img value={70} src="/img/partners_2/Pao de acucar.svg" />
          <Img value={70} src="/img/partners_2/FIat.svg" />
          <Img value={70} src="/img/partners_2/Net.svg" />

          <Img src="/img/partners_2/Clinacarx.svg" />
          <Img src="/img/partners_2/Doctor.svg" />
          <Img src="/img/partners_2/Facens.svg" />
          <Img src="/img/partners_2/PersonalMe.svg" />
        </GridContainer>
      </Container>
    </>
  )
}

export { SectionFour }
