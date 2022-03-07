import Motto from '../Motto'
import Header from '../Header'
import { Container, Shader } from './Section1Styles'

const Section1 = () => {
  return (
    <Container>
      <Shader>
        <Header />
        <Motto />
      </Shader>
    </Container>
  )
}

export default Section1