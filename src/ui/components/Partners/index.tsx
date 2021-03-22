import { PartnersBox, PartnersContainer, PartnersTitle } from './PartnersStyles'

const Partners = () => {
  const partners = [
    'Facens',
    'Newton',
    'Net',
    'Wizard',
    'BSToys',
    'Santander',
    'Pao de acucar',
    'Fiat',
    'Dettol',
    'Vivo'
  ]

  return (
    <PartnersContainer>
      <PartnersTitle>Onde levamos a inovação</PartnersTitle>
      <PartnersBox>
        {partners.map((partner) => (
          <img
            key={partner}
            src={`/img/partners/${partner}.svg`}
            alt={`Logo da Marca ${partner}`}
          />
        ))}
      </PartnersBox>
    </PartnersContainer>
  )
}

export default Partners
