import styled from 'styled-components'

export const ProgrammingLanguagesContainer = styled.section`
  width: 80%;
  margin: auto;
  padding-top: 4rem;

  padding-bottom: 8rem;

  @media screen and (min-width: 738px) {
    padding-bottom: 12rem;
  }
`

export const ProgrammingLanguagesTitle = styled.h3`
  text-align: center;
  font-family: 'Gotham';
  line-height: 5.6rem;
  font-size: 3.2rem;
  color: #534554;
  margin: 2rem 0;
`

export const Languages = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

export const LanguageBox = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding-bottom: 3rem;

  box-shadow: 2px 5px 5px #bbb;

  border-radius: 1rem;

  font-family: 'Gotham';
  width: 100%;

  img {
    margin-top: 2rem;
    align-self: flex-start;
    max-width: 150px;
    max-height: 150px;
  }

  @media screen and (max-width: 738px) {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
  @media screen and (min-width: 738px) {
    margin: 3rem 0;

    width: 49%;
  }
  @media screen and (min-width: 992px) {
    width: 31%;
    &::not(:nth-child(3n)) {
      margin-right: 5rem;
    }
  }
`

export const LanguageName = styled.p`
  font-family: 'Gotham-Bold';
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-top: 1.8rem;

  @media screen and (min-width: 992px) {
    font-size: 1.6rem;
  }
`

export const LanguageText = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
  max-width: 24rem;
  margin-top: 0.5rem;
  padding-bottom: 2rem;
  color: #000;
  margin-left: 3rem;

  @media screen and (min-width: 992px) {
    font-size: 1.3em;
  }
`

export const LanguageDescription = styled.p`
  margin-top: 1.5rem;
`
