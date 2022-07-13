import React from 'react'
import {
  Button,
  Container,
  Desc,
  Layout,
  Left,
  LeftButton,
  LeftDesc,
  LeftImg,
  LeftTitle,
  Right,
  Title
} from './styles'

const Footer = () => {
  return (
    <Container>
      <Layout>
        <Left>
          <LeftTitle>
            Seu futuro só <br /> depende de você
          </LeftTitle>
          <LeftDesc>
            Acreditamos no valor da tecnologia e no impacto positivo <br /> que
            a transformação digital exerce sobre a sociedade. <br />
            <br />
            Faça acontecer com a <b>Bitwise Technology.</b>
          </LeftDesc>
          <LeftButton>Quero inovar com a Bitwise</LeftButton>
          <LeftImg src="/img/3d.svg" />
        </Left>
        <Right>
          <Title>
            Faça parte da <br /> equipe Bitwise
          </Title>
          <Desc>
            Tem interesse em se juntar à equipe da <br />{' '}
            <b>Bitwise Technology</b>? Junte-se a nós!
          </Desc>
          <Button>Quero fazer parte</Button>
        </Right>
      </Layout>
      {/* <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#640055',
          justifySelf: 'flex-end'
        }}
      ></div> */}
    </Container>
  )
}

export { Footer }
