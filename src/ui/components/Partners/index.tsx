import { LanguagesContext } from '../../../contexts/LanguagesContext'
import { useContext } from 'react'
import { PartnersBox, PartnersContainer, PartnersTitle } from './PartnersStyles'

import strings from '../../../languages/language'

const Partners = () => {
  const { selectedLanguage } = useContext(LanguagesContext)

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
    'Vivo',
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
      <PartnersTitle>{strings[selectedLanguage].partners.title}</PartnersTitle>
      <PartnersBox data-testid="partners">
        {partners.map((partner, index) => (
          <img
            className={index >= partners.length / 2 ? 'mobile-only' : ''}
            key={index}
            src={`/img/partners/${partner}.svg`}
            alt={`Logo da Marca ${partner}`}
          />
        ))}
      </PartnersBox>
    </PartnersContainer>
  )
}

export default Partners
