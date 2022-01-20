import styled from 'styled-components'

export const MottoContainerWrapper = styled.div`
  background-image: linear-gradient(to bottom, #FFF 80%, #D0C7D1 );
`

export const MottoContainer = styled.section`
  font-family: 'Gotham';
  width: 70%;
  
  color: #735775;
  margin: auto;
  margin-top: 10rem;

  @media screen and (min-width: 1200px) {
    margin-top: 8rem;
  }

  @media screen and (min-width: 1400px) {
    margin-top: 15rem;
  }

  @media screen and (min-width: 2000px) {
    margin-top: 8rem;
  }

  @media screen and (min-width: 1200px) and (max-height: 700px) {
    margin-top: 10rem;
  }
`

export const MottoTitle = styled.h1`
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: -3px;

  strong {
    font-family: 'Gotham-Bold';
  }
  @media screen and (min-width: 768px) {
    span {
      display: block;
    }
  }
  @media screen and (min-width: 1200px) {
    line-height: normal;
    font-size: 6.5rem;
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

  cursor: pointer;

  padding: 1.8rem;
  border: none;
  border-radius: 1rem;
  outline: none;

  width: 25.6rem;
  max-width: 25.6rem;

  margin-bottom: 11rem;

  @media screen and (min-width: 1400px) {
    margin-bottom: 18rem;
  }

  @media screen and (min-width: 2000px) {
    margin-bottom: 16rem;
  }

  @media screen and (min-width: 1200px) and (max-height: 730px) {
    margin-bottom: 8rem;
  }
`
