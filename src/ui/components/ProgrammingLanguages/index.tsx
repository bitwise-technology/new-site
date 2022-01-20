import { LanguagesContext } from 'contexts/LanguagesContext'
import { useContext } from 'react'

import strings from '../../../languages/language'

import parse from 'html-react-parser'

import {
  LanguageText,
  LanguageBox,
  LanguageDescription,
  LanguageName,
  Languages,
  ProgrammingLanguagesContainer,
  ProgrammingLanguagesTitle,
  ProgrammingLanguagesContainerWrapper
} from './ProgrammingLanguagesStyles'

const ProgrammingLanguages = () => {
  const { selectedLanguage } = useContext(LanguagesContext)

  const programmingLanguagesStrings =
    strings[selectedLanguage].programming_languages

  const languages = [
    {
      name: 'Rust',
      description: programmingLanguagesStrings.first_language.text,
      image: '/img/languages/Rust_programming_language_black_logo.svg',
      alt: programmingLanguagesStrings.first_language.alt
    },
    {
      name: 'Typescript',
      description: programmingLanguagesStrings.second_language.text,
      image: '/img/languages/Typescript_logo_2020.svg',
      alt: programmingLanguagesStrings.second_language.alt
    },
    {
      name: 'Golang',
      description: programmingLanguagesStrings.third_language.text,
      image: '/img/languages/Go_Logo_Blue.svg',
      alt: programmingLanguagesStrings.third_language.alt
    },
    {
      name: 'Node.JS',
      description: programmingLanguagesStrings.fourth_language.text,
      image: '/img/languages/Node.js_logo.svg',
      alt: programmingLanguagesStrings.fourth_language.alt
    },
    {
      name: 'Blockchain',
      description: programmingLanguagesStrings.fifth_language.text,
      image: '/img/languages/blockchain-logo.svg',
      alt: programmingLanguagesStrings.fifth_language.alt
    },
    {
      name: 'Fintechs',
      description: programmingLanguagesStrings.sixth_language.text,
      image: '/img/languages/credit card alt.svg',
      alt: programmingLanguagesStrings.sixth_language.alt
    }
  ]

  return (
    <ProgrammingLanguagesContainerWrapper>
    <ProgrammingLanguagesContainer>
      <ProgrammingLanguagesTitle>
        {programmingLanguagesStrings.title}
      </ProgrammingLanguagesTitle>
      <Languages data-testid="languages">
        {languages.map(({ name, description, image, alt }) => {
          return (
            <LanguageBox key={name}>
              <div>
                <img src={image} alt={alt} />
              </div>
              <LanguageText>
                <LanguageName>{name}</LanguageName>
                <LanguageDescription>{parse(description)}</LanguageDescription>
              </LanguageText>
            </LanguageBox>
          )
        })}
      </Languages>
    </ProgrammingLanguagesContainer>
    </ProgrammingLanguagesContainerWrapper>
  )
}

export default ProgrammingLanguages
