import React from 'react'
import { Button, Container, Left, Menu, MenuItem, Right } from './styles'

const Header = () => {
  return (
    <Container>
      <Menu>
        <Left>
          <img src="/img/BitLogo.svg" alt="Logo da bitwise" />
          <MenuItem style={{ marginLeft: 8 }}>A Bitwise</MenuItem>
          <MenuItem>Nossas Parceirias</MenuItem>
          <MenuItem>O que fazemos</MenuItem>
        </Left>
        <Right>
          <MenuItem style={{ marginRight: 18 }}>PT | EN</MenuItem>
          <Button>Vamos conversar</Button>
        </Right>
      </Menu>
    </Container>
  )
}

export { Header }
