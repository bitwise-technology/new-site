import React from 'react'
import {
  Container,
  GridContainer,
  Item,
  ItemDesc,
  ItemTitle,
  Title
} from './styles'

const SectionFive = () => {
  return (
    <Container id="oquefazemos">
      <Title>O que fazemos</Title>
      <GridContainer>
        <Item>
          <img src="/img/app-medico.svg" alt="Desenvolvimento de software" />
          <ItemTitle>Desenvolvimento de software</ItemTitle>
          <ItemDesc>
            Desenvolvimento específico, escalável e seguro, para atender a sua
            necessidade e deixar o seu produto pronto para expandir o seu
            negócio.
          </ItemDesc>
        </Item>
        <Item>
          <img src="/img/interface.svg" alt="" />
          <ItemTitle>
            Foco em <br /> usabilidade
          </ItemTitle>
          <ItemDesc>
            Focamos na melhor forma do seu consumidor ter acesso ao seu produto
            ou serviço, gerando a satisfação dele e resultado para você.
          </ItemDesc>
        </Item>
        <Item>
          <img src="/img/interface 1.svg" alt="" />
          <ItemTitle>Consultoria para sua empresa</ItemTitle>
          <ItemDesc>
            Procuramos entender a necessidade do seu produto com tecnologia de
            ponta e metodologias emergentes para aprovar a proposta de sucesso.
          </ItemDesc>
        </Item>
      </GridContainer>
    </Container>
  )
}

export { SectionFive }
