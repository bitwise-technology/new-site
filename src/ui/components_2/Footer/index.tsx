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
          <LeftTitle data-aos="fade-right">
            Seu futuro só <br /> depende de você
          </LeftTitle>
          <LeftDesc data-aos="fade-right">
            Acreditamos no valor da tecnologia e no impacto positivo <br /> que
            a transformação digital exerce sobre a sociedade. <br />
            <br />
            Faça acontecer com a <b>Bitwise Technology.</b>
          </LeftDesc>
          <LeftButton data-aos="fade-right">
            Quero inovar com a Bitwise
          </LeftButton>
          <LeftImg data-aos="fade-up" src="/img/3d.svg" />
        </Left>
        <Right>
          <Title data-aos="fade-left">
            Faça parte da <br /> equipe Bitwise
          </Title>
          <Desc data-aos="fade-left">
            Tem interesse em se juntar à equipe da <br />{' '}
            <b>Bitwise Technology</b>? Junte-se a nós!
          </Desc>
          <Button data-aos="fade-left">Quero fazer parte</Button>
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
