import { ContactModalContext } from 'contexts/ContactModal'
import Image from 'next/image'
import { useContext } from 'react'
import { BreakLine } from '../Motto/MottoStyles'
import {
  ButtonsContainer,
  CallToActionSectionContainer,
  CallToActionSectionDescription,
  CallToActionSectionImageContainer,
  CallToActionSectionTexts,
  CallToActionSectionTitle,
  StyledButton,
  StyledButtonInverted
} from './CallToActionSectionStyles'

const CallToActionSection = () => {
  const { setShowContactModal } = useContext(ContactModalContext)

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShowContactModal && setShowContactModal(true)
  }

  return (
    <CallToActionSectionContainer>
      <CallToActionSectionTexts>
        <CallToActionSectionTitle data-testid="CallToActionSectionTitle">
          O digital é por nossa conta!
        </CallToActionSectionTitle>
        <CallToActionSectionDescription data-testid="CallToActionSectionDescription">
          Nós nascemos em 2015, para mudar o dia a dia das pessoas através de
          tecnologia.
          <BreakLine />
          Hoje, com o mesmo objetivo, impactamos empresas através da nossa
          experiência e tecnologia em diferentes áreas. Temos uma equipe
          proativa e disposta a resolver problemas complexos para expandir e
          escalar o seu negócio.
        </CallToActionSectionDescription>
        <ButtonsContainer>
          <StyledButton onClick={openModal}>
            QUERO FALAR COM UM CONSULTOR{' '}
          </StyledButton>
          <StyledButtonInverted>
            QUERO TRABALHAR NA BITWISE
          </StyledButtonInverted>
        </ButtonsContainer>
      </CallToActionSectionTexts>
      <CallToActionSectionImageContainer>
        <Image src="/img/Logo Faça Acontecer.svg" width={421} height={200} />
      </CallToActionSectionImageContainer>
    </CallToActionSectionContainer>
  )
}

export default CallToActionSection
