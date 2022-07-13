import React from 'react'
import { Button, Container, Desc, Title, Image } from './styles'

const Landing = () => {
  return (
    <>
      <Container>
        <Image src="/img/Spa.svg"></Image>
        <div>
          <Title>
            Transformamos ideias <br /> em resultados reais
          </Title>
          <Desc>
            Desde de 2015 dispostos a mudar o dia a dia das pessoas através de
            tecnologia.
          </Desc>
          <Button>Quero inovar com a Bitwise</Button>
        </div>
      </Container>
    </>
  )
}

export { Landing }
