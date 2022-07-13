import React, { useEffect, useState } from 'react'
import {
  Button,
  Container,
  Left,
  Logo,
  Menu,
  MenuItem,
  MobileContainer,
  MobileMenu,
  Right
} from './styles'

const Header = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(null)
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0)

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    if (clientWindowHeight > 70) {
      setBackgroundTransparacy(1)
    } else {
      setBackgroundTransparacy(0)
    }
  }, [clientWindowHeight])
  return (
    <>
      <Container typeProp={backgroundTransparacy}>
        <Menu>
          <Left>
            <Logo
              typeProp={backgroundTransparacy}
              src="/img/LogoColor.svg"
              alt="Logo da bitwise"
            />
            <MenuItem
              typeProp={backgroundTransparacy}
              style={{ marginLeft: 8 }}
            >
              A Bitwise
            </MenuItem>
            <MenuItem typeProp={backgroundTransparacy} href="#partners">
              Nossas Parceirias
            </MenuItem>
            <MenuItem typeProp={backgroundTransparacy} href="#oquefazemos">
              O que fazemos
            </MenuItem>
          </Left>
          <Right>
            <MenuItem
              typeProp={backgroundTransparacy}
              style={{ marginRight: 18 }}
            >
              PT | EN
            </MenuItem>
            <Button typeProp={backgroundTransparacy}>Vamos conversar</Button>
          </Right>
        </Menu>
      </Container>
      <MobileContainer>
        <Logo
          typeProp={backgroundTransparacy}
          src="/img/LogoColor.svg"
          alt="Logo da bitwise"
        />
        <MobileMenu>
          <img src="/img/menu.svg" />
        </MobileMenu>
      </MobileContainer>
    </>
  )
}

export { Header }
