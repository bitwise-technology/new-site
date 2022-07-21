import React, { useContext } from 'react'
import { LanguagesContext } from '../../../contexts/LanguagesContext'

import {
  HeaderContainer,
  Language,
  LanguagesContainer,
  LinksAndLanguagesContainer,
  LogoContainer
} from './HeaderStyles'

type Language = 'pt-BR' | 'en-EN'

const Header = () => {
  const { setSelectedLanguage } = useContext(LanguagesContext)

  const handleSelectedLanguage = (language: Language) => {
    setSelectedLanguage && setSelectedLanguage(language)
  }

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="/img/Logo-White.svg" alt="Logo da Bitwise" />
      </LogoContainer>
      <LinksAndLanguagesContainer>
        <LanguagesContainer data-testid="languages">
          <Language onClick={() => handleSelectedLanguage('pt-BR')}>
            PT
          </Language>{' '}
          |{' '}
          <Language onClick={() => handleSelectedLanguage('en-EN')}>
            EN
          </Language>
        </LanguagesContainer>
      </LinksAndLanguagesContainer>
    </HeaderContainer>
  )
}

export default Header
