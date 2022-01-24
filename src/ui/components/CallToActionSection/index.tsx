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

  const goToLinkedIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    window.open('https://www.linkedin.com/company/bitwisetechnology', '_blank')
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
            <StyledButtonInverted onClick={goToLinkedIn}>
              {callToActionStrings.work_with_us}
            </StyledButtonInverted>
          </ButtonsContainer>
        </CallToActionSectionTexts>
        <CallToActionSectionImageContainer>
          <img
            src="/img/Astronaut.svg"
            alt="Imagem Astronauta'"
          />
        </CallToActionSectionImageContainer>
      </CallToActionSectionContainer>
    </CallToActionSectionContainerWrapper>
  )
}

export default CallToActionSection
