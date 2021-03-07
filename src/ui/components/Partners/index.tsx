import Image from 'next/image'

import { PartnersBox, PartnersContainer, PartnersTitle } from './PartnersStyles'

const Partners = () => {
  return (
    <PartnersContainer>
      <PartnersTitle>Onde levamos a inovação</PartnersTitle>
      <PartnersBox>
        <Image
          src="/img/PartnersLogo.svg"
          alt="Marcas que já utilizaram algum serviço"
          layout="intrinsic"
          width={1140}
          height={44}
        />
      </PartnersBox>
    </PartnersContainer>
  )
}

export default Partners
