import React from 'react'
import { useLanguage } from '../../../contexts/LanguagesContext'
import strings from '../../../languages/language'
import {
  Container,
  GridContainer,
  Item,
  ItemDesc,
  ItemTitle,
  Title
} from './styles'

const SectionFive = () => {
  const { selectedLanguage } = useLanguage()
  const bitwiseInfoStrings = strings[selectedLanguage].what_we_do
  return (
    <>
      <div id="oquefazemos"></div>
      <Container>
        <Title>{bitwiseInfoStrings.title}</Title>
        <GridContainer>
          <Item>
            <img src="/img/app-medico.svg" alt="Desenvolvimento de software" />
            <ItemTitle>{bitwiseInfoStrings.first.title}</ItemTitle>
            <ItemDesc>{bitwiseInfoStrings.first.description}</ItemDesc>
          </Item>
          <Item>
            <img src="/img/interface.svg" />
            <ItemTitle>{bitwiseInfoStrings.second.title}</ItemTitle>
            <ItemDesc>{bitwiseInfoStrings.second.description}</ItemDesc>
          </Item>
          <Item>
            <img src="/img/interface 1.svg" />
            <ItemTitle>{bitwiseInfoStrings.third.title}</ItemTitle>
            <ItemDesc>{bitwiseInfoStrings.third.description}</ItemDesc>
          </Item>
        </GridContainer>
      </Container>
    </>
  )
}

export { SectionFive }
