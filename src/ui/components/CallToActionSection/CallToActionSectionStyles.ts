import styled from 'styled-components'

export const CallToActionSectionContainer = styled.section`
  @media screen and (min-width: 1200px) {
    padding-top: 8.7rem;

    width: 80%;

    margin: auto;

    display: flex;
  }
`

export const CallToActionSectionTexts = styled.div`
  @media screen and (min-width: 1200px) {
    flex: 1;
  }
`

export const CallToActionSectionTitle = styled.h3`
  @media screen and (min-width: 1200px) {
    font-size: 3.2rem;
    line-height: 5.6rem;
    color: #534554;
  }
`

export const CallToActionSectionDescription = styled.p`
  @media screen and (min-width: 1200px) {
    margin-top: 1.4rem;

    font-size: 1.8rem;

    color: #534554;

    max-width: 48rem;
    line-height: 3.1rem;

    text-align: justify;
  }
`

export const ButtonsContainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`

export const StyledButton = styled.button`
  @media screen and (min-width: 1200px) {
    background-color: #890877;

    color: #fff;
    font-size: 1.4rem;
    font-weight: bold;

    padding: 1.8rem;
    border: none;
    border-radius: 1rem;
    outline: none;

    margin-top: 4.9rem;
    margin-bottom: 1rem;
  }
`

export const StyledButtonInverted = styled.button`
  @media screen and (min-width: 1200px) {
    color: #640055;
    font-size: 1.4rem;
    font-weight: bold;

    padding: 1.8rem;
    border: 3px solid #640055;
    border-radius: 1rem;
    outline: none;
  }
`

export const CallToActionSectionImageContainer = styled.div`
  @media screen and (min-width: 1200px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

export const BreakLine = styled.span`
  display: block;
`
