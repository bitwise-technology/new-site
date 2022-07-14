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

const SectionOne = () => {
  return (
    <>
      <Container>
        <Center>
          <Left data-aos="fade-right">
            <Image src="/img/Vecteezy.svg" alt="Logo da bitwise" />
          </Left>
          <Right data-aos="fade-left">
            <Title>Projetos Gerenciados</Title>
            <Sub>
              Co-criamos soluções personalizadas em parceria com seu time.
              <br /> <br />
              Melhoramos processos internos e garantimos a execução de projetos
              no prazo necessário.
            </Sub>
          </Right>
        </Center>
      </Container>
      <MobileContainer>
        <Title>Projetos Gerenciados</Title>
        <Sub>
          Co-criamos soluções personalizadas em parceria com seu time.
          <br /> <br /> Melhoramos processos internos e garantimos a execução de
          projetos no prazo necessário.
        </Sub>
        <Image width={328} src="/img/Vecteezy.svg" alt="Logo da bitwise" />
      </MobileContainer>
    </>
  )
}

export { SectionOne }
