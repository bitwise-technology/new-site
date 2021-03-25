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
          <a href="/">
            <img src="/img/MediumLogo.svg" />
          </a>

          <a href="/">
            <img src="/img/SocialLogos.svg" />
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
