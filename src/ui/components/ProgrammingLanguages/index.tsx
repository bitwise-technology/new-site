import { LanguagesContext } from 'contexts/LanguagesContext'
import { useContext } from 'react'

import strings from '../../../languages/language'

import {
  LanguageText,
  LanguageBox,
  LanguageDescription,
  LanguageName,
  Languages,
  ProgrammingLanguagesContainer,
  ProgrammingLanguagesTitle
} from './ProgrammingLanguagesStyles'

const ProgrammingLanguages = () => {
  const { selectedLanguage } = useContext(LanguagesContext)

  const programmingLanguagesStrings =
    strings[selectedLanguage].programming_languages

  const languages = [
    {
      name: 'Rust',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/Rust_programming_language_black_logo.svg',
      alt: programmingLanguagesStrings.first_language.alt
    },
    {
      name: 'Typescript',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/Typescript_logo_2020.svg',
      alt: programmingLanguagesStrings.second_language.alt
    },
    {
      name: 'Golang',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/Go_Logo_Blue.svg',
      alt: programmingLanguagesStrings.third_language.alt
    },
    {
      name: 'Node.JS',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/Node.js_logo.svg',
      alt: programmingLanguagesStrings.fourth_language.alt
    },
    {
      name: 'Blockchain',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/blockchain-logo.svg',
      alt: programmingLanguagesStrings.fifth_language.alt
    },
    {
      name: 'Fintechs',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/credit card alt.svg',
      alt: programmingLanguagesStrings.sixth_language.alt
    }
  ]

  return (
    <ProgrammingLanguagesContainer>
      <ProgrammingLanguagesTitle>
        {programmingLanguagesStrings.title}
      </ProgrammingLanguagesTitle>
      <Languages data-testid="languages">
        {languages.map(({ name, description, image, alt }) => {
          return (
            <LanguageBox key={name}>
              <img src={image} alt={alt} />
              <LanguageText>
                <LanguageName>{name}</LanguageName>
                <LanguageDescription>{description}</LanguageDescription>
              </LanguageText>
            </LanguageBox>
          )
        })}
      </Languages>
    </ProgrammingLanguagesContainer>
  )
}

export default ProgrammingLanguages
