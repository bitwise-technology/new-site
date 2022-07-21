import React from 'react'
import { Button, Container, Desc, Title } from './styles'

import strings from '../../../languages/language'
import { useLanguage } from '../../../contexts/LanguagesContext'

const Landing = () => {
  const { selectedLanguage } = useLanguage()
  const bitwiseInfoStrings = strings[selectedLanguage].landing

  return (
    <>
      <Container>
        <div data-aos="fade-right">
          <Title>{bitwiseInfoStrings.title}</Title>
          <Desc>{bitwiseInfoStrings.desc}</Desc>
          <Button
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send?phone=5515991722580&text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20trabalhos%20da%20Bitwise!',
                '_blank'
              )
            }
          >
            {bitwiseInfoStrings.button}{' '}
          </Button>
        </div>
      </Container>
    </>
  )
}

export { Landing }
