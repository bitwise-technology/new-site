import {
  WhereWeAreContainer,
  WhereWeArePhrase,
  WhereWeArePlaces,
  BreakLine,
  TypeWriterEffect
} from './WhereWeAreStyles'

const WhereWeAre = () => {
  return (
    <WhereWeAreContainer>
      <WhereWeArePlaces>
        18 Cidades <BreakLine /> & 2 Países
      </WhereWeArePlaces>
      <WhereWeArePhrase>
        <strong>
          Nós
          <BreakLine />
          Somos
        </strong>
        <BreakLine />
        <TypeWriterEffect>Nômades</TypeWriterEffect>
        <BreakLine />
        <small>Somos 100% Remoto</small>
      </WhereWeArePhrase>
    </WhereWeAreContainer>
  )
}

export default WhereWeAre
