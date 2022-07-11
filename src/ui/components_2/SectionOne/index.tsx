import React from 'react'
import { Center, Container, Left, Right, Sub, Title } from './styles'

const SectionOne = () => {
  return (
    <Container>
      <Center>
        <Left>
          <img src="/img/Vecteezy.svg" alt="Logo da bitwise" />
        </Left>
        <Right>
          <Title>Projetos Gerenciados</Title>
          <Sub>
            Co-criamos soluções personalizadas em parceria com seu time. <br />{' '}
            <br />
            Melhoramos processos internos e garantimos a execução de projetos no
            prazo necessário.
          </Sub>
        </Right>
      </Center>
    </Container>
  )
}

export { SectionOne }
