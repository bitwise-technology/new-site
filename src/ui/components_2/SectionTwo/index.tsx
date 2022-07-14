import React from 'react'
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
  return (
    <>
      <Container>
        <Center>
          <Left>
            <Title>Outsourcing</Title>
            <Sub>
              Temos uma equipe proativa e com foco total em soluções precisas e
              assertividade baseada em conhecimento do negócio.
              <br /> <br /> Aqui os profissionais multidisciplinares colocam ao
              seu alcance o domínio de tecnologias de ponta e de metodologias
              emergentes.
            </Sub>
          </Left>
          <Right>
            <img
              src="/img/Outsourcing.svg"
              alt="Logo da bitwise"
              style={{ objectFit: 'cover' }}
            />
          </Right>
        </Center>
      </Container>
      <MobileContainer>
        <Title>Outsourcing</Title>
        <Sub>
          Temos uma equipe proativa e com foco total em soluções precisas e
          assertividade baseada em conhecimento do negócio. <br /> <br /> Aqui
          os profissionais multidisciplinares colocam ao seu alcance o domínio
          de tecnologias de ponta e de metodologias emergentes.
        </Sub>
        <Image width={328} src="/img/Outsourcing.svg" alt="Logo da bitwise" />
      </MobileContainer>
    </>
  )
}

export { SectionTwo }
