import {
  Button,
  Container,
  Left,
  Logo,
  Menu,
  MenuItem,
  MobileMenu,
  Right,
  StyledLink
} from './styles'
import { useEffect, useState } from 'react'

import Router from 'next/router'
import strings from '../../../languages/language'
import { useLanguage } from '../../../contexts/LanguagesContext'
import useMediaQuery from '../../../helpers/hooks/useMediaQuery'

type Language = 'pt-BR' | 'en-EN'

const LanguageButton = ({ color = '#fff' }) => {
  const { setSelectedLanguage } = useLanguage()

  const handleSelectedLanguage = (language: Language) => {
    setSelectedLanguage && setSelectedLanguage(language)
  }
  return (
    <div style={{ color, marginRight: 12, fontSize: 16 }}>
      <a
        onClick={(e) => {
          e.preventDefault()
          localStorage.setItem('@lang', 'pt')
          Router.push('/pt')
        }}
      >
        <span
          style={{
            cursor: 'pointer'
          }}
        >
          PT
        </span>
      </a>{' '}
      |{' '}
      <a
        onClick={(e) => {
          e.preventDefault()
          localStorage.setItem('@lang', 'en')
          Router.push('/en')
        }}
      >
        <span
          style={{
            cursor: 'pointer'
          }}
          onClick={() => handleSelectedLanguage('en-EN')}
        >
          EN
        </span>
      </a>
    </div>
  )
}

const Header = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(null)
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0)
  const [menu, setMenu] = useState(false)

  const matcheLaptop = useMediaQuery('(min-width: 1024px)')
  const matcheMobile = useMediaQuery('(min-width: 565px)')

  const { selectedLanguage } = useLanguage()

  const bitwiseInfoStrings = strings[selectedLanguage].header

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }
  const toggleMenu = () => {
    setMenu((prev) => !prev)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    if (clientWindowHeight > 70) {
      setBackgroundTransparacy(1)
    } else {
      setBackgroundTransparacy(0)
    }
  }, [clientWindowHeight])
  return (
    <>
      <Container typeProp={backgroundTransparacy}>
        <Menu>
          <Left>
            <Logo
              typeProp={backgroundTransparacy}
              src="/img/LogoColor.svg"
              alt="Logo da bitwise"
            />

            {matcheLaptop && (
              <MenuItem
                typeProp={backgroundTransparacy}
                style={{ marginLeft: 8 }}
                to="bitwise"
              >
                {bitwiseInfoStrings.first}
              </MenuItem>
            )}

            {matcheLaptop && (
              <MenuItem typeProp={backgroundTransparacy} to="partners">
                {bitwiseInfoStrings.second}
              </MenuItem>
            )}

            {matcheLaptop && (
              <MenuItem typeProp={backgroundTransparacy} to="oquefazemos">
                {bitwiseInfoStrings.third}
              </MenuItem>
            )}
          </Left>
          {matcheMobile ? (
            <Right>
              {matcheLaptop && (
                <StyledLink
                  href="https://api.whatsapp.com/send?phone=5515991722580&text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20trabalhos%20da%20Bitwise!"
                  target={'_blank'}
                  rel="noreferrer"
                  typeProp={backgroundTransparacy}
                >
                  <img width={16} height={16} src="/img/whatsapp.svg" alt="" />
                </StyledLink>
              )}

              {matcheLaptop && (
                <StyledLink
                  href="mailto:manoela@bitwise.ltda"
                  typeProp={backgroundTransparacy}
                >
                  <img width={16} height={16} src="/img/mail.svg" alt="" />
                </StyledLink>
              )}

              <StyledLink
                href="https://www.linkedin.com/company/bitwisetechnology/mycompany/"
                target={'_blank'}
                rel="noreferrer"
                typeProp={backgroundTransparacy}
              >
                <img width={16} height={16} src="/img/linkedIn.svg" alt="" />
              </StyledLink>
              <StyledLink
                href="https://www.instagram.com/bitwisetechnology/"
                target={'_blank'}
                rel="noreferrer"
                typeProp={backgroundTransparacy}
              >
                <img width={16} height={16} src="/img/instagram.svg" alt="" />
              </StyledLink>

              <LanguageButton
                color={backgroundTransparacy === 0 ? '#fff' : '#000'}
              />
              <Button
                typeProp={backgroundTransparacy}
                onClick={() =>
                  window.open(
                    'https://api.whatsapp.com/send?phone=5515991722580&text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20trabalhos%20da%20Bitwise!',
                    '_blank'
                  )
                }
              >
                {bitwiseInfoStrings.button}
              </Button>
            </Right>
          ) : (
            <MobileMenu>
              <a
                href="https://www.linkedin.com/company/bitwisetechnology/mycompany/"
                target={'_blank'}
                rel="noreferrer"
                style={{
                  marginRight: 12
                }}
              >
                <img width={16} height={16} src="/img/linkedIn.svg" alt="" />
              </a>
              <a
                href="https://www.instagram.com/bitwisetechnology/"
                style={{
                  marginRight: 12
                }}
                target={'_blank'}
                rel="noreferrer"
              >
                <img width={16} height={16} src="/img/instagram.svg" alt="" />
              </a>

              <LanguageButton
                color={backgroundTransparacy === 0 ? '#fff' : '#000'}
              />

              <img
                src="/img/menu.svg"
                onClick={() => toggleMenu()}
                style={{ cursor: 'pointer' }}
              />
            </MobileMenu>
          )}
        </Menu>
        {menu && !matcheMobile && (
          <div data-aos="zoom-in">
            <MenuItem
              typeProp={backgroundTransparacy}
              style={{ marginLeft: 8, fontSize: 12 }}
              to="bitwise"
            >
              {bitwiseInfoStrings.first}
            </MenuItem>
            <MenuItem
              style={{
                fontSize: 12
              }}
              typeProp={backgroundTransparacy}
              to="partners"
            >
              {bitwiseInfoStrings.second}
            </MenuItem>

            <MenuItem
              typeProp={backgroundTransparacy}
              style={{
                fontSize: 12
              }}
              to="oquefazemos"
            >
              {bitwiseInfoStrings.third}
            </MenuItem>
          </div>
        )}
      </Container>
    </>
  )
}

export { Header }
