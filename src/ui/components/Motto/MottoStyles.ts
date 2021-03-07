import styled from 'styled-components'

export const MottoContainer = styled.section`
  @media screen and (min-width: 1200px) {
    width: 70%;

    color: #735775;
    margin: auto;
    margin-top: 17rem;
  }
`

export const MottoTitle = styled.h1`
  @media screen and (min-width: 1200px) {
    font-size: 5.6rem;
    letter-spacing: -3px;

    strong {
      font-weight: bold;
    }
  }
`

export const MottoPhrase = styled.p`
  @media screen and (min-width: 1200px) {
    margin-top: 4.7rem;
    margin-bottom: 4.2rem;

    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    word-spacing: 0.1rem;

    color: #8b738c;
  }
`

export const StyledButton = styled.button`
  @media screen and (min-width: 1200px) {
    background-color: #890877;

    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;

    padding: 1.8rem;
    border: none;
    border-radius: 1rem;
    outline: none;

    margin-bottom: 12rem;
  }
`

export const BreakLine = styled.span`
  display: block;
`
