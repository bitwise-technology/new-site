import {
  BitwiseMotto,
  InfoContainer,
  LogoContainer,
  BreakLine,
  Address,
  Country,
  Street,
  Reference,
  State,
  InfoContainerWrapper
} from './BitwiseInfoStyles'

import Image from 'next/image'

const BitwiseInfo = () => {
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

        <BitwiseMotto>
          Acreditamos no valor da tecnologia e no impacto <BreakLine /> positivo
          que a transformação digital exerce sobre <BreakLine /> a sociedade,
          mudando o nosso dia a dia, facilitando <BreakLine /> atividades comuns
          e acelerando os negócios.
        </BitwiseMotto>

        <Address data-testid="address">
          <Country>Brasil</Country>
          <Street> R. Raphael Dias da Silva, 75</Street>
          <Reference> 3º andar • Sala 306 e 308</Reference>
          <State>Sorocaba/SP</State>
        </Address>
        <Address data-testid="address">
          <Country>CANADÁ </Country>
          <Street> 830, Av. Ernest-Gagnon,</Street>
          <Reference> Bureau 315, Sala 609</Reference>
          <State>Quebec</State>
        </Address>
      </InfoContainer>
    </InfoContainerWrapper>
  )
}

export default BitwiseInfo
