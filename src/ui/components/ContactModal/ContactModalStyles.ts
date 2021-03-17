import styled from 'styled-components'

export const ContactModalContainer = styled.div`
  @media screen and (min-width: 1200px) {
    position: fixed;
    right: 0;
    top: 5%;
    z-index: 1;
    width: 60%;

    background-color: #fff;
    transition: all 0.5s;
  }
`

export const ContactModalHeader = styled.header`
  @media screen and (min-width: 1200px) {
    background-image: linear-gradient(359.39deg, #efeeee 0.46%, #ffffff 99.42%);

    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

export const ContactModalTitle = styled.h3`
  @media screen and (min-width: 1200px) {
    color: #735775;
    font-size: 3rem;
    line-height: 4rem;
    strong {
      font-weight: bold;
    }
  }
`

export const ContactModalLogoContainer = styled.div``

export const ContactModalForm = styled.form``

export const ContactModalInputs = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    & > * {
      width: 45%;
    }
  }
`

export const ContactModalRadioInputs = styled.div`
  @media screen and (min-width: 1200px) {
    width: 95%;
    margin: 3rem auto;
  }
`

export const ContactModalRadioInputsText = styled.p`
  @media screen and (min-width: 1200px) {
    font-size: 1.4rem;
    line-height: 2rem;
    color: #5a3d5c;
  }
`

export const ContactModalTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
`

export const ContactModalClose = styled.span`
  @media screen and (min-width: 1200px) {
    position: absolute;
    right: 5%;
    top: 2%;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 1rem;
  }
`

export const SubmitButtonContainer = styled.div`
  margin: 5rem auto;
  width: 95%;
  padding-bottom: 1rem;
`

export const StyledSubmitButton = styled.button`
  @media screen and (min-width: 1200px) {
    background-color: #890877;

    color: #fff;
    font-size: 1.4rem;

    width: 9rem;
    height: 5rem;

    border: none;
    border-radius: 1rem;
    outline: none;
  }
`

export const BreakLine = styled.span`
  display: block;
`
