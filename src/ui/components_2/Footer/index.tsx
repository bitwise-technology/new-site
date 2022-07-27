import React, { useEffect, useMemo } from 'react'
import { useLanguage } from '../../../contexts/LanguagesContext'
import useMediaQuery from '../../../helpers/hooks/useMediaQuery'
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

  const infoStrings = useMemo(() => {
    return {
      'en-EN': {
        footer: {
          left: {
            title: 'Your future only \ndepends on you',
            desciption: (
              <>
                We believe in the value of technology and the positive <br />
                impact that digital transformation has on society. <br />
                <br />
                Make it happen with <b>Bitwise Technology.</b>
              </>
            ),
            button: 'I want to innovate with Bitwise'
          },
          right: {
            title: 'Join the \nBitwise team',
            desciption: (
              <>
                Interested in joining the <b>Bitwise Technology</b> team? <br />
                Join us!
              </>
            ),
            button: 'I want to be part'
          }
        }
      },
      'pt-BR': {
        footer: {
          left: {
            title: 'Seu futuro só \ndepende de você',
            desciption: (
              <>
                Acreditamos no valor da tecnologia e no impacto positivo <br />
                que a transformação digital exerce sobre a sociedade. <br />
                <br />
                Faça acontecer com a <b>Bitwise Technology.</b>
              </>
            ),
            button: 'Quero inovar com a Bitwise'
          },
          right: {
            title: 'Faça parte da \nequipe Bitwise',
            desciption: (
              <>
                Tem interesse em se juntar à equipe da <br />
                <b>Bitwise Technology</b>? Junte-se a nós!
              </>
            ),
            button: 'Quero fazer parte'
          }
        }
      }
    }
  }, [])

  useEffect(() => {
    console.log(selectedLanguage)
  }, [selectedLanguage])

  const bitwiseInfoStrings = infoStrings[selectedLanguage].footer

  return (
    <>
      <Container>
        {matcheMobile ? (
          <Layout>
            <Left>
              <div
                style={{
                  padding: 24
                }}
              >
                <LeftTitle>{bitwiseInfoStrings.left.title}</LeftTitle>
                <LeftDesc>{bitwiseInfoStrings.left.desciption}</LeftDesc>
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
                        marginRight: 16
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
                        marginRight: 16
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
                        marginRight: 16
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
                        marginRight: 16
                      }}
                      width={24}
                      height={24}
                      src="/img/mail.svg"
                      alt=""
                    />
                  </a>
                </Links>
              </div>
              <img width={380} src="/img/3d.svg" />
            </Left>
            <Right>
              <Title>{bitwiseInfoStrings.right.title}</Title>
              <Desc>{bitwiseInfoStrings.right.desciption}</Desc>
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
          </Layout>
        ) : (
          <>
            <div style={{ display: 'flex', width: '100%' }}>
              <div style={{ flex: 1, backgroundColor: '#fff' }}></div>
              <Layout>
                <Left>
                  <LeftTitle>{bitwiseInfoStrings.left.title}</LeftTitle>
                  <LeftDesc>{bitwiseInfoStrings.left.desciption}</LeftDesc>
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
                          marginRight: 16
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
                          marginRight: 16
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
                          marginRight: 16
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
                          marginRight: 16
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
                  <Desc>{bitwiseInfoStrings.right.desciption}</Desc>
                  <Button
                    onClick={() => {
                      window.open(
                        'https://bitwisetechnology.notion.site/Vagas-abertas-21bad6bb29c449e1a2a98c905b545df5',
                        '_blank'
                      )
                    }}
                  >
                    {bitwiseInfoStrings.right.button}
                    <img src="/img/arrow-right.svg" style={{ marginLeft: 8 }} />
                  </Button>
                </Right>
              </Layout>
              <div style={{ flex: 1, backgroundColor: '#640055' }}></div>
            </div>
          </>
        )}
      </Container>
    </>
  )
}

export { Footer }
