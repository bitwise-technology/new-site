import React from 'react'
import { Center, Container, Left, Right, Sub, Title } from './styles'

const SectionThree = () => {
  return (
    <Container>
      <Center>
        <Left>
          <img src="/img/VecteezyPeople.svg" alt="Logo da bitwise" />
        </Left>
        <Right>
          <Title>Transformação Digital</Title>
          <Sub>
            Contamos com especialistas nas áreas de{' '}
            <b>
              User Experience, User Interface, Project Management, Arquitetos,
              DevOps e Desenvolvedores,
            </b>
            atuando com metodologias ágeis e constante acompanhamento de
            performance.
          </Sub>
        </Right>
      </Center>
    </Container>
  )
}

export { SectionThree }
