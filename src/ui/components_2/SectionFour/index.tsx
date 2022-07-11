import Image from 'next/image'
import React from 'react'
import { Container, GridContainer, Title } from './styles'

const SectionFour = () => {
  return (
    <Container>
      <Title>Onde Levamos a inovação</Title>
      <GridContainer>
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
  )
}

export { SectionFour }
