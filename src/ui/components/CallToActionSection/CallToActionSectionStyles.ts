import styled from 'styled-components'

export const CallToActionSectionContainerWrapper = styled.div`
  background-color: #fbfbfb;
`

export const CallToActionSectionContainer = styled.section`
  display: flex;

  flex-direction: column;

  font-family: 'Gotham';

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 992px) {
    width: 90%;

    flex-direction: row;

    margin: auto;

    padding: 10rem 0 0 0;
  }

  @media screen and (min-width: 1400px) {
    width: 80%;

    padding: 12rem 0 0 0;
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
  font-weight: bold;
  @media screen and (min-width: 992px) {
    font-size: 3rem;
    line-height: 5.6rem;
  }
  @media screen and (min-width: 1600px) {
    font-size: 3.2rem;
    line-height: 5.6rem;
  }
`

export const CallToActionSectionDescription = styled.p`
  margin-top: 1.4rem;
  color: #534554;

  max-width: 53rem;
  line-height: 4rem;

  font-size: 1.4rem;
  line-height: 3rem;

  max-width: 40rem;

  text-align: justify;

  @media screen and (min-width: 1200px) {
    font-size: 2rem;
    line-height: 4rem;

    max-width: 45rem;
  }

  @media screen and (min-width: 1400px) {
    font-size: 1.8rem;
    line-height: 4rem;

    max-width: 49rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;

  @media screen and (min-width: 1200px) {
    max-width: 45rem;
  }

  @media screen and (min-width: 1400px) {
    max-width: 49rem;
  }
`

export const StyledButton = styled.button`
  background-color: #890877;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;

  padding: 1.8rem;
  border: none;
  border-radius: 1rem;
  outline: none;

  margin-top: 4.9rem;
  margin-bottom: 1rem;

  cursor: pointer;
`

export const StyledButtonInverted = styled.button`
  color: #640055;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1.8rem;
  border: 3px solid #640055;
  border-radius: 1rem;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  -webkit-background-color: transparent;
`

export const CallToActionSectionImageContainer = styled.div`
  max-width: 100%;
  align-self: center;
  padding: 1rem;
  margin: 2rem 0;
  order: -1;

  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    width: 80%;
    @media screen and (min-width: 992px) {
      width: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (min-width: 992px) {
    order: 0;
    flex: 1;

    padding: 0;
    margin: 0;
    max-width: 45%;
  }

  @media screen and (min-width: 1300px) {
    max-width: 43%;
  }
`
