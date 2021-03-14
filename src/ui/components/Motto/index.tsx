import { ContactModalContext } from 'contexts/ContactModal'
import { useContext } from 'react'

import {
  BreakLine,
  MottoContainer,
  MottoPhrase,
  MottoTitle,
  StyledButton
} from './MottoStyles'

const Motto = () => {
  const { setShowContactModal } = useContext(ContactModalContext)

  const handleOpenModal = (event: React.MouseEvent<Element>) => {
    event.preventDefault()
    setShowContactModal && setShowContactModal(true)
  }

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
      <StyledButton onClick={handleOpenModal} data-testid="motto-button">
        Falar com um consultor
      </StyledButton>
    </MottoContainer>
  )
}

export default Motto
