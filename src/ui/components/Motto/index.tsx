import { ContactModalContext } from 'contexts/ContactModal'
import { LanguagesContext } from 'contexts/LanguagesContext'
import { useContext } from 'react'

import parse from 'html-react-parser'

import strings from '../../../languages/language'

import {
  MottoContainer,
  MottoPhrase,
  MottoTitle,
  StyledButton
} from './MottoStyles'

const Motto = () => {
  const { selectedLanguage } = useContext(LanguagesContext)
  const { setShowContactModal } = useContext(ContactModalContext)

  const handleOpenModal = (event: React.MouseEvent<Element>) => {
    event.preventDefault()
    setShowContactModal && setShowContactModal(true)
  }

  const mottoStrings = strings[selectedLanguage].motto

  return (
    <MottoContainer data-testid="motto-button">
      <MottoTitle data-testid="motto-title">
        {parse(mottoStrings.title)}
      </MottoTitle>
      <MottoPhrase data-testid="motto-phrase">
        {parse(mottoStrings.text)}
      </MottoPhrase>
      <StyledButton onClick={handleOpenModal} data-testid="motto-button">
        {selectedLanguage && mottoStrings.buttonPhrase}
      </StyledButton>
    </MottoContainer>
  )
}

export default Motto
