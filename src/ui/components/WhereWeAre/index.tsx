import { LanguagesContext } from 'contexts/LanguagesContext'
import { useContext } from 'react'
import {
  WhereWeAreContainer,
  WhereWeArePhrase,
  WhereWeArePlaces,
  BreakLine,
  TypeWriterEffect
} from './WhereWeAreStyles'

import strings from '../../../languages/language'

const WhereWeAre = () => {
  const { selectedLanguage } = useContext(LanguagesContext)

  const { cities, countries, we, are, nomad, description } = strings[
    selectedLanguage
  ].where_we_are

  return (
    <WhereWeAreContainer>
      <WhereWeArePlaces>
        {cities} <BreakLine /> & {countries}
      </WhereWeArePlaces>
      <WhereWeArePhrase>
        <strong>
          {we}
          <BreakLine />
          {are}
        </strong>
        <BreakLine />
        <TypeWriterEffect>{nomad}</TypeWriterEffect>
        <BreakLine />
        <small>{description}</small>
      </WhereWeArePhrase>
    </WhereWeAreContainer>
  )
}

export default WhereWeAre
