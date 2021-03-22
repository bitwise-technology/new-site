import styled from 'styled-components'

export const MottoContainer = styled.section`
  font-family: 'Gotham';
  width: 70%;

  color: #735775;
  margin: auto;
  margin-top: 10rem;
  @media screen and (min-width: 1200px) {
    margin-top: 17rem;
    height: 65vh;
  }
`

export const MottoTitle = styled.h1`
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: -3px;

  strong {
    font-family: 'Gotham-Bold';
  }
  @media screen and (min-width: 1200px) {
    line-height: normal;
    font-size: 5.6rem;
  }
`

export const MottoPhrase = styled.p`
  margin-top: 4.7rem;
  margin-bottom: 4.2rem;

  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
  line-height: 2.5rem;

  color: #8b738c;
  @media screen and (min-width: 1200px) {
  }
`

export const StyledButton = styled.button`
  background-color: #890877;

  color: #fff;
  font-size: 1.7rem;
  font-weight: bold;

  padding: 1.8rem;
  border: none;
  border-radius: 1rem;
  outline: none;

  margin-bottom: 12rem;
  @media screen and (min-width: 1200px) {
  }
`

export const BreakLine = styled.span`
  display: block;
`
