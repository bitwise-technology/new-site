import styled from 'styled-components'

export const ProgrammingLanguagesContainer = styled.section`
  width: 80%;
  margin: auto;
  padding-top: 4rem;

  padding-bottom: 6rem;

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

  box-shadow: 2px 5px 1px #bbb;

  border-radius: 1rem;

  font-family: 'Gotham';
  width: 100%;
  @media screen and (max-width: 738px) {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
  @media screen and (min-width: 738px) {
    margin: 4rem 0;

    width: 49%;
  }
  @media screen and (min-width: 992px) {
    width: 30%;
    max-width: 34rem;

    &:not(:nth-child(3n)) {
      margin-right: 1rem;
    }
  }
`

export const LanguageImage = styled.div`
  padding-top: 1.5rem;
  padding-left: 2rem;
`

export const LanguageName = styled.p`
  padding-top: 2rem;
  font-family: 'Gotham';
  font-weight: bold;
  font-size: 1.3rem;
  text-transform: uppercase;
`

export const LanguageText = styled.div`
  margin: auto;
  font-size: 1.2rem;
  line-height: 2rem;
  max-width: 21rem;
  padding-bottom: 3.6rem;
  color: #000;
`

export const LanguageDescription = styled.p`
  margin-top: 1rem;
`
