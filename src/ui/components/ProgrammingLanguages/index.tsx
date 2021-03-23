import Image from 'next/image'
import {
  LanguageText,
  LanguageBox,
  LanguageDescription,
  LanguageImage,
  LanguageName,
  Languages,
  ProgrammingLanguagesContainer,
  ProgrammingLanguagesTitle
} from './ProgrammingLanguagesStyles'

const ProgrammingLanguages = () => {
  const languages = [
    {
      name: 'Rust',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/Rust_programming_language_black_logo.svg'
    },
    {
      name: 'Typescript',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/Typescript_logo_2020.svg'
    },
    {
      name: 'Golang',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/Go_Logo_Blue.svg'
    },
    {
      name: 'Node.JS',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/Node.js_logo.svg'
    },
    {
      name: 'Blockchain',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/blockchain-logo.svg'
    },
    {
      name: 'Fintechs',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: '/img/languages/credit card alt.svg'
    }
  ]

  return (
    <ProgrammingLanguagesContainer>
      <ProgrammingLanguagesTitle>Nossa Stack</ProgrammingLanguagesTitle>
      <Languages data-testid="languages">
        {languages.map(({ name, description, image }) => {
          return (
            <LanguageBox key={name}>
              <LanguageImage>
                <Image src={image} width={35} height={35} />
              </LanguageImage>
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
