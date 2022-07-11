import { LanguagesContext } from 'contexts/LanguagesContext'
import { useContext, useEffect } from 'react'
import {
  WhereWeAreContainer,
  WhereWeArePhrase,
  WhereWeArePlaces,
  BreakLine,
  TypeWriterEffect
} from './WhereWeAreStyles'

import ScrollOut from 'scroll-out'

import strings from '../../../languages/language'

const WhereWeAre = () => {
  const { selectedLanguage } = useContext(LanguagesContext)

  const { cities, countries, we, are, nomad, description } =
    strings[selectedLanguage].where_we_are

  useEffect(() => {
    const scrollOut = ScrollOut({
      targets: '.type_writer'
    })

    return () => {
      scrollOut.teardown()
    }
  })

  return (
    <WhereWeAreContainer>
      <WhereWeArePlaces data-testid="where-we-are-places">
        {cities} <br /> & {countries}
      </WhereWeArePlaces>
      <WhereWeArePhrase data-testid="where-we-are-phrase">
        <strong>
          {we}
          <BreakLine />
          {are}
        </strong>
        <BreakLine />
        <TypeWriterEffect className="type_writer">{nomad}</TypeWriterEffect>
        <BreakLine />
        <small>{description}</small>
      </WhereWeArePhrase>
    </WhereWeAreContainer>
  )
}

export default WhereWeAre
