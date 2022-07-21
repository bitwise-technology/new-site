import React from 'react'
import { useLanguage } from '../../../contexts/LanguagesContext'
import useMediaQuery from '../../../helpers/hooks/useMediaQuery'
import strings from '../../../languages/language'
import {
  Button,
  Container,
  Desc,
  Icon,
  Layout,
  Left,
  LeftButton,
  LeftDesc,
  LeftImg,
  LeftTitle,
  Links,
  Right,
  Title
} from './styles'

const Footer = () => {
  const matcheMobile = useMediaQuery('(max-width: 900px)')

  const { selectedLanguage } = useLanguage()
  const bitwiseInfoStrings = strings[selectedLanguage].footer

  return (
    <>
      <Container>
        <Layout>
          {matcheMobile ? (
            <>
              <Left>
                <div
                  style={{
                    padding: 24
                  }}
                >
                  <LeftTitle>{bitwiseInfoStrings.left.title}</LeftTitle>
                  <LeftDesc
                    dangerouslySetInnerHTML={{
                      __html: bitwiseInfoStrings.left.desciption
                    }}
                  ></LeftDesc>
                  <LeftButton
                    onClick={() =>
                      window.open(
                        'https://api.whatsapp.com/send?phone=5515991722580&text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20trabalhos%20da%20Bitwise!',
                        '_blank'
                      )
                    }
                  >
                    {bitwiseInfoStrings.left.button}
                  </LeftButton>
                </div>
                <img width={380} src="/img/3d.svg" />
              </Left>
              <Right>
                <Title>{bitwiseInfoStrings.right.title}</Title>
                <Desc
                  dangerouslySetInnerHTML={{
                    __html: bitwiseInfoStrings.right.desciption
                  }}
                ></Desc>
                <Button
                  onClick={() => {
                    window.open(
                      'https://bitwisetechnology.notion.site/Vagas-abertas-21bad6bb29c449e1a2a98c905b545df5',
                      '_blank'
                    )
                  }}
                >
                  {bitwiseInfoStrings.right.button}
                  <img style={{ marginLeft: 8 }} src="/img/arrow-right.svg" />
                </Button>
              </Right>
            </>
          ) : (
            <>
              <Left>
                <LeftTitle>{bitwiseInfoStrings.left.title}</LeftTitle>
                <LeftDesc
                  dangerouslySetInnerHTML={{
                    __html: bitwiseInfoStrings.left.desciption
                  }}
                ></LeftDesc>
                <LeftButton
                  onClick={() =>
                    window.open(
                      'https://api.whatsapp.com/send?phone=5515991722580&text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20trabalhos%20da%20Bitwise!',
                      '_blank'
                    )
                  }
                >
                  {bitwiseInfoStrings.left.button}
                </LeftButton>
                <Links>
                  <a
                    href="https://api.whatsapp.com/send?phone=5515991722580&text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20trabalhos%20da%20Bitwise!"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <Icon
                      style={{
                        marginRight: 8
                      }}
                      width={24}
                      height={24}
                      src="/img/whatsapp.svg"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/bitwisetechnology/mycompany/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <Icon
                      style={{
                        marginRight: 8
                      }}
                      width={24}
                      height={24}
                      src="/img/linkedIn.svg"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/bitwisetechnology/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <Icon
                      style={{
                        marginRight: 8
                      }}
                      width={24}
                      height={24}
                      src="/img/instagram.svg"
                      alt=""
                    />
                  </a>
                  <a href="mailto:manoela@bitwise.ltda">
                    <Icon
                      style={{
                        marginRight: 8
                      }}
                      width={24}
                      height={24}
                      src="/img/mail.svg"
                      alt=""
                    />
                  </a>
                </Links>
                <LeftImg src="/img/3d.svg" />
              </Left>
              <Right>
                <Title>{bitwiseInfoStrings.right.title}</Title>
                <Desc
                  dangerouslySetInnerHTML={{
                    __html: bitwiseInfoStrings.right.desciption
                  }}
                ></Desc>
                <Button
                  onClick={() => {
                    window.open(
                      'https://bitwisetechnology.notion.site/Vagas-abertas-21bad6bb29c449e1a2a98c905b545df5',
                      '_blank'
                    )
                  }}
                >
                  {bitwiseInfoStrings.right.button}
                  <img src="/img/arrow-right.svg" />
                </Button>
              </Right>
            </>
          )}
        </Layout>
      </Container>
    </>
  )
}

export { Footer }
