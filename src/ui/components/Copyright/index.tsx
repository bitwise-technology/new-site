import Image from 'next/image'

import {
  BackToTop,
  CopyrightContainer,
  CopyrightText,
  CopyrightWrapper,
  SocialMedias
} from './CopyrightStyles'

const Copyright = () => {
  const handleBackToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <CopyrightWrapper>
      <CopyrightContainer>
        <CopyrightText>Todos os direitos reservados - 2021</CopyrightText>

        <SocialMedias>
          <a href="/">
            <Image
              src="/img/MediumLogo.svg"
              width={24}
              height={24}
              layout="intrinsic"
            />
          </a>

          <a href="/">
            <Image
              src="/img/SocialLogos.svg"
              width={58}
              height={24}
              layout="intrinsic"
            />
          </a>
        </SocialMedias>

        <BackToTop onClick={handleBackToTop} type="button">
          Voltar ao topo
        </BackToTop>
      </CopyrightContainer>
    </CopyrightWrapper>
  )
}

export default Copyright
