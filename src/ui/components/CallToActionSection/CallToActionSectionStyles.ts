import styled from 'styled-components'

export const CallToActionSectionContainerWrapper = styled.div`
  background-color: #fbfbfb;

  padding-bottom: 15rem;
`

export const CallToActionSectionContainer = styled.section`
  display: flex;

  flex-direction: column;

  font-family: 'Gotham';

  padding: 1rem;

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 992px) {
    width: 80%;

    margin: auto;

    flex-direction: row;

    padding-top: 8.7rem;
  }
`

export const CallToActionSectionTexts = styled.div`
  margin: 2rem;

  @media screen and (min-width: 992px) {
    flex: 1;
    margin: 0;
  }
`

export const CallToActionSectionTitle = styled.h3`
  font-size: 2.5rem;
  line-height: 3rem;
  color: #534554;
  @media screen and (min-width: 992px) {
    font-size: 3.2rem;
    line-height: 5.6rem;
  }
`

export const CallToActionSectionDescription = styled.p`
  margin-top: 1.4rem;

  font-size: 1.8rem;

  color: #534554;

  max-width: 48rem;
  line-height: 3.1rem;

  text-align: justify;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 48rem;
`

export const StyledButton = styled.button`
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
`

export const StyledButtonInverted = styled.button`
  color: #640055;
  font-size: 1.4rem;
  font-weight: bold;

  padding: 1.8rem;
  border: 3px solid #640055;
  border-radius: 1rem;
  outline: none;
`

export const CallToActionSectionImageContainer = styled.div`
  width: 60%;
  align-self: center;
  padding: 1rem;
  margin: 2rem 0;
  order: -1;
  @media screen and (min-width: 992px) {
    order: 0;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    align-self: initial;
    padding: 0;
    margin: 0;
  }
`

export const BreakLine = styled.span`
  display: block;
`
