import styled from 'styled-components'

export const ProgrammingLanguagesContainer = styled.section`
  width: 80%;
  margin: auto;
  padding-top: 4rem;

  padding-bottom: 8rem;

  @media screen and (min-width: 992px) {
    width: 90%;
  }

  @media screen and (min-width: 1400px) {
    width: 80%;
  }

  @media screen and (min-width: 738px) {
    padding-bottom: 12rem;
  }
`

export const ProgrammingLanguagesTitle = styled.h3`
  text-align: center;
  font-family: 'Gotham-Black';
  line-height: 5.6rem;
  font-size: 3.2rem;
  color: #534554;
  margin: 4.3rem 0 5.8rem 0;
`

export const Languages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 5rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }

  @media screen and (min-width: 1800px) {
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  }
`

export const LanguageBox = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;

  box-shadow: 2px 5px 5px #bbb;

  text-align: center;

  border-radius: 1rem;

  font-family: 'Gotham';

  img {
    margin-top: 2rem;
    max-width: 50px;
    max-height: 50px;
    width: 50px;
    height: 50px;

    @media screen and (min-width: 1500px) {
      align-self: flex-start;
    }
  }

  @media screen and (min-width: 1500px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
`

export const LanguageText = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
  max-width: 24rem;
  margin-top: 0.5rem;
  color: #000;
  @media screen and (min-width: 1500px) {
    padding-bottom: 2rem;
    margin-left: 3rem;

    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1500px) {
    font-size: 1.3em;
  }
`

export const LanguageName = styled.p`
  font-family: 'Gotham-Bold';
  font-size: 1.4rem;
  margin-top: 2rem;

  @media screen and (min-width: 1500px) {
    text-transform: uppercase;

    font-size: 1.6rem;
  }
`

export const LanguageDescription = styled.p`
  margin-top: 1.5rem;

  @media screen and (min-width: 1200px) {
    text-align: left;
    height: 11rem;
  }
`
