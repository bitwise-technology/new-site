import React, { useContext } from 'react'

import Image from 'next/image'

import {
  HeaderContainer,
  Language,
  LanguagesContainer,
  LinksAndLanguagesContainer,
  LogoContainer
} from './HeaderStyles'
import { LanguagesContext } from 'contexts/LanguagesContext'

type Language = 'pt-BR' | 'en-EN'

const Header = () => {
  const { setSelectedLanguage } = useContext(LanguagesContext)

  const handleSelectedLanguage = (language: Language) => {
    setSelectedLanguage && setSelectedLanguage(language)
  }

  return (
    <HeaderContainer>
      <LogoContainer>
        <Image
          src="/img/Logo.svg"
          alt="Logo da Bitwise"
          layout="intrinsic"
          height={48}
          width={130}
        />
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
