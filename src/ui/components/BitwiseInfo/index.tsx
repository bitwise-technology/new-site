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

import Image from 'next/image'
import { useContext } from 'react'
import { LanguagesContext } from 'contexts/LanguagesContext'

const BitwiseInfo = () => {
  const { selectedLanguage } = useContext(LanguagesContext)

  const bitwiseInfoStrings = strings[selectedLanguage].bitwise_info

  return (
    <InfoContainerWrapper>
      <InfoContainer>
        <LogoContainer>
          <Image
            src="/img/Bottom Logo.svg"
            width={98}
            height={36}
            layout="intrinsic"
          />
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

        <BackToTop>Voltar ao topo</BackToTop>
      </InfoContainer>
    </InfoContainerWrapper>
  )
}

export default BitwiseInfo
