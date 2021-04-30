import {
  BitwiseMotto,
  InfoContainer,
  LogoContainer,
  Address,
  Country,
  Street,
  Reference,
  State,
  InfoContainerWrapper,
  BackToTop
} from './BitwiseInfoStyles'

import parse from 'html-react-parser'

import strings from '../../../languages/language'

import { useContext } from 'react'
import { LanguagesContext } from 'contexts/LanguagesContext'

const BitwiseInfo = () => {
  const { selectedLanguage } = useContext(LanguagesContext)

  const bitwiseInfoStrings = strings[selectedLanguage].bitwise_info

  const goBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <InfoContainerWrapper>
      <InfoContainer>
        <LogoContainer>
          <img src="/img/Bottom Logo.svg" alt="Logo da bitwise" />
        </LogoContainer>

        <BitwiseMotto>{parse(bitwiseInfoStrings.beliefs)}</BitwiseMotto>

        <Address data-testid="address">
          <Country>{bitwiseInfoStrings.first_address.country}</Country>
          <Street> {bitwiseInfoStrings.first_address.street}</Street>
          <Reference> {bitwiseInfoStrings.first_address.reference}</Reference>
          <State> {bitwiseInfoStrings.first_address.state}</State>
        </Address>
        <Address data-testid="address">
          <Country>{bitwiseInfoStrings.second_address.country}</Country>
          <Street> {bitwiseInfoStrings.second_address.street}</Street>
          <Reference> {bitwiseInfoStrings.second_address.reference}</Reference>
          <State> {bitwiseInfoStrings.second_address.state}</State>
        </Address>

        <BackToTop onClick={goBackToTop}>
          {strings[selectedLanguage].copyright.backToTop}
        </BackToTop>
      </InfoContainer>
    </InfoContainerWrapper>
  )
}

export default BitwiseInfo
