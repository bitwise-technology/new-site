import {
  BackToTop,
  CopyrightContainer,
  CopyrightText,
  CopyrightWrapper,
  SocialMedias
} from './CopyrightStyles'

import strings from '../../../languages/language'
import { useContext } from 'react'
import { LanguagesContext } from 'contexts/LanguagesContext'

const Copyright = () => {
  const { selectedLanguage } = useContext(LanguagesContext)

  const handleBackToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const { text, backToTop } = strings[selectedLanguage].copyright

  return (
    <CopyrightWrapper>
      <CopyrightContainer>
        <CopyrightText>{text}</CopyrightText>

        <SocialMedias>
          <a
            href="https://medium.com/@bitwisetechnology"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/MediumLogo.svg" alt="Medium Logo" />
          </a>

          <a
            href="https://www.linkedin.com/company/bitwisetechnology"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/linkedIn.svg" alt="LinkedIn Logo" />
          </a>

          <a
            href="https://instagram.com/bitwisetechnology?igshid=l4nls0y2rbks"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/instagram.svg" alt="Instagram Logo" />
          </a>
        </SocialMedias>

        <BackToTop onClick={handleBackToTop} type="button">
          {backToTop}
        </BackToTop>
      </CopyrightContainer>
    </CopyrightWrapper>
  )
}

export default Copyright
