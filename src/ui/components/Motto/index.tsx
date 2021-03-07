import {
  BreakLine,
  MottoContainer,
  MottoPhrase,
  MottoTitle,
  StyledButton
} from './MottoStyles'

const Motto = () => {
  return (
    <MottoContainer data-testid="motto-button">
      <MottoTitle data-testid="motto-title">
        Inovação, Design e<BreakLine /> Tecnologia que{' '}
        <strong>transforma!</strong>
      </MottoTitle>
      <MottoPhrase data-testid="motto-phrase">
        Design, desenvolvimento ágil, inovação,
        <BreakLine /> cultura e liberdade. Nosso desafio é transformar
        <BreakLine /> ideias em resultados reais.
      </MottoPhrase>
      <StyledButton data-testid="motto-button">
        Falar com um consultor
      </StyledButton>
    </MottoContainer>
  )
}

export default Motto
