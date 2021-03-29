import { LanguagesContext } from 'contexts/LanguagesContext'
import { ContactModalResponseContext } from 'contexts/ModalResponse'
import { useContext } from 'react'

import strings from '../../../languages/language'

import {
  ModalResponseSocialMediaText,
  ModalResponseContainer,
  ModalResponseSocialMediaContainer,
  ModalResponseSocialMedias,
  ModalResponseText,
  ModalResponseTitle,
  ModalResponseClose
} from './ModalResponseStyles'

const ModalResponse = () => {
  const {
    showContactModalResponse,
    setShowContactModalResponse,
    statusCode
  } = useContext(ContactModalResponseContext)

  const { selectedLanguage } = useContext(LanguagesContext)

  const { success, error } = strings[selectedLanguage].modal_response

  const response =
    statusCode === 200
      ? {
          title: success.title,
          text: success.text
        }
      : {
          title: error.title,
          text: error.text
        }

  const isValidFeedback = statusCode === 200

  const handleCloseResponseModal = (event: React.MouseEvent) => {
    setShowContactModalResponse && setShowContactModalResponse(false)
  }

  return showContactModalResponse ? (
    <ModalResponseContainer isValidFeedback={isValidFeedback}>
      <ModalResponseClose
        alt="Close button"
        onClick={handleCloseResponseModal}
        src="/img/close_icon.svg"
      />
      <ModalResponseTitle>{response.title}</ModalResponseTitle>
      <ModalResponseText>{response.text}</ModalResponseText>
      <ModalResponseSocialMediaContainer>
        <ModalResponseSocialMediaText>
          Enquanto isso, acompanhe a bitwise nas redes sociais :
        </ModalResponseSocialMediaText>
        <ModalResponseSocialMedias>
          <a
            href="https://medium.com/@bitwisetechnology"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/MediumLogo.svg" />
          </a>

          <a
            href="https://www.linkedin.com/company/bitwisetechnology"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/linkedIn.svg" />
          </a>

          <a
            href="https://instagram.com/bitwisetechnology?igshid=l4nls0y2rbks"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/instagram.svg" />
          </a>
        </ModalResponseSocialMedias>
        <ModalResponseSocialMedias></ModalResponseSocialMedias>
      </ModalResponseSocialMediaContainer>
    </ModalResponseContainer>
  ) : null
}

export default ModalResponse
