import React from 'react'
import { Container, GridContainer, MobileContainer, Title } from './styles'

const SectionFour = () => {
  return (
    <>
      <Container id="partners">
        <Title data-aos="fade-up">Onde Levamos a inovação</Title>
        <GridContainer data-aos="fade-up">
          <img src="/img/partners_2/Santander.svg" />
          <img src="/img/partners_2/WIzard.svg" />
          <img src="/img/partners_2/OBoticario.svg" />
          <img src="/img/partners_2/Newton.svg" />

          <img src="/img/partners_2/Vector.svg" />
          <img src="/img/partners_2/Pao de acucar.svg" />
          <img src="/img/partners_2/FIat.svg" />
          <img src="/img/partners_2/Net.svg" />

          <img src="/img/partners_2/Clinacarx.svg" />
          <img src="/img/partners_2/Doctor.svg" />
          <img src="/img/partners_2/Facens.svg" />
          <img src="/img/partners_2/PersonalMe.svg" />
        </GridContainer>
      </Container>
      <MobileContainer>
        <Title>Onde Levamos a inovação</Title>
        <GridContainer>
          <img width={130} src="/img/partners_2/Santander.svg" />
          <img width={130} src="/img/partners_2/WIzard.svg" />
          <img width={130} src="/img/partners_2/OBoticario.svg" />
          <img width={130} src="/img/partners_2/Newton.svg" />

          <img width={70} src="/img/partners_2/Vector.svg" />
          <img width={70} src="/img/partners_2/Pao de acucar.svg" />
          <img width={70} src="/img/partners_2/FIat.svg" />
          <img width={70} src="/img/partners_2/Net.svg" />

          <img width={90} src="/img/partners_2/Clinacarx.svg" />
          <img width={130} src="/img/partners_2/Doctor.svg" />
          <img width={100} src="/img/partners_2/Facens.svg" />
          <img width={130} src="/img/partners_2/PersonalMe.svg" />
        </GridContainer>
        {/* <Image src="/img/NYMobile.svg" /> */}
      </MobileContainer>
    </>
  )
}

export { SectionFour }
