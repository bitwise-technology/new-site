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
        100% Remoto
      </WhereWeArePhrase>
    </WhereWeAreContainer>
  )
}

export default WhereWeAre
