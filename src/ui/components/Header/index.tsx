import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import {
  HeaderContainer,
  Language,
  LanguagesContainer,
  LinkItem,
  LinksAndLanguagesContainer,
  LinksList,
  LogoContainer,
  StyledLink
} from './HeaderStyles'

const Header = () => {
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
          <Language>PT</Language> | <Language>EN</Language>
        </LanguagesContainer>
      </LinksAndLanguagesContainer>
    </HeaderContainer>
  )
}

export default Header
