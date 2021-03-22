import styled from 'styled-components'

export const HeaderContainer = styled.header`
  font-family: 'Gotham';
  @media screen and (min-width: 1200px) {
    width: 80%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding-top: 4rem;

    font-size: 1.6rem;
  }
`

export const LogoContainer = styled.div`
  @media screen and (min-width: 1200px) {
    flex: 1;
  }
`

export const LinksAndLanguagesContainer = styled.div`
  @media screen and (min-width: 1200px) {
    flex: 1;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`

export const LinksList = styled.ul`
  @media screen and (min-width: 1200px) {
    display: flex;
    flex: 1;
    justify-content: center;
  }
`

export const LinkItem = styled.li`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`

export const StyledLink = styled.a`
  @media screen and (min-width: 1200px) {
    display: inline-block;
    color: #372e38;
    cursor: pointer;
    font-size: 1.6rem;
    text-transform: uppercase;
  }
`

export const LanguagesContainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a51c92;
  }
`

export const Language = styled.span`
  margin: 0 1rem;
`
