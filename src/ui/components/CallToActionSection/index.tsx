import { ContactModalContext } from 'contexts/ContactModal'
import { useContext } from 'react'
import strings from '../../../languages/language'
import parse from 'html-react-parser'
import {
  ButtonsContainer,
  CallToActionSectionContainer,
  CallToActionSectionContainerWrapper,
  CallToActionSectionDescription,
  CallToActionSectionImageContainer,
  CallToActionSectionTexts,
  CallToActionSectionTitle,
  StyledButton,
  StyledButtonInverted
} from './CallToActionSectionStyles'
import { LanguagesContext } from 'contexts/LanguagesContext'

const CallToActionSection = () => {
  const { selectedLanguage } = useContext(LanguagesContext)

  const { setShowContactModal } = useContext(ContactModalContext)

  const callToActionStrings = strings[selectedLanguage].call_to_action

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    setShowContactModal && setShowContactModal(true)
  }

  return (
    <CallToActionSectionContainerWrapper>
      <CallToActionSectionContainer>
        <CallToActionSectionTexts>
          <CallToActionSectionTitle data-testid="CallToActionSectionTitle">
            {callToActionStrings.title}
          </CallToActionSectionTitle>
          <CallToActionSectionDescription data-testid="CallToActionSectionDescription">
            {parse(callToActionStrings.description)}
          </CallToActionSectionDescription>
          <ButtonsContainer>
            <StyledButton data-testid="open-modal-button" onClick={openModal}>
              {callToActionStrings.talk_to_consultant}
            </StyledButton>
            <StyledButtonInverted onClick={openModal}>
              {callToActionStrings.work_with_us}
            </StyledButtonInverted>
          </ButtonsContainer>
        </CallToActionSectionTexts>
        <CallToActionSectionImageContainer>
          <img src="/img/Logo Faça Acontecer.svg" />
        </CallToActionSectionImageContainer>
      </CallToActionSectionContainer>
    </CallToActionSectionContainerWrapper>
  )
}

export default CallToActionSection
