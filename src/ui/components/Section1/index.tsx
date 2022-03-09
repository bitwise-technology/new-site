import Motto from '../Motto'
import Header from '../Header'
import { Container, Shader } from './Section1Styles'
import Image, { ImageLoaderProps } from 'next/image'

const Section1 = () => {
  const myLoader = ({ src, quality }:ImageLoaderProps) => {
  return `${src}?q=${quality || 100}`
}

  return (
    <Container>
      <Image
      loader={myLoader}
      src="./img/Section1-Background2.png"
      layout="fill"
      priority
    />
      <Shader>
        <Header />
        <Motto />
      </Shader>
    </Container>
  )
}

export default Section1