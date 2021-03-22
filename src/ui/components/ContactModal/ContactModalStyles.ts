import styled from 'styled-components'

export const ContactModalContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0%;
  z-index: 1;
  width: 100%;
  background-color: #fff;

  max-width: 100%;
  overflow: hidden;

  transition: all 0.5s;

  @media screen and (min-width: 1200px) {
    top: 5%;
    width: 60%;
  }
`

export const ContactModalHeader = styled.header`
  background-image: linear-gradient(359.39deg, #efeeee 0.46%, #ffffff 99.42%);
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 4rem 1rem;
`

export const ContactModalTitle = styled.h3`
  color: #735775;
  font-size: 1.3rem;
  line-height: 2rem;
  strong {
    font-weight: bold;
  }

  @media screen and (min-width: 1200px) {
    font-size: 3rem;
    line-height: 4rem;
  }
`

export const ContactModalLogoContainer = styled.div``

export const ContactModalForm = styled.form`
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 0%;
  }
`

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
  margin: 3rem auto;

  @media screen and (min-width: 1200px) {
    width: 95%;
  }
`

export const ContactModalRadioInputsText = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;

  color: #5a3d5c;
`

export const ContactModalTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;

  & > textarea {
    width: 100%;
    height: 10rem;
    @media screen and (min-width: 768px) {
      width: 40%;
    }
  }
`

export const ContactModalClose = styled.span`
  position: absolute;
  right: 5%;
  top: 0%;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem;

  @media screen and (min-width: 1200px) {
    top: 2%;
    font-size: 1.5rem;
  }
`

export const SubmitButtonContainer = styled.div`
  margin: 5rem auto;
  width: 95%;
  padding-bottom: 1rem;
`

export const StyledSubmitButton = styled.button`
  background-color: #890877;

  color: #fff;
  font-size: 1.4rem;

  width: 9rem;
  height: 5rem;

  border: none;
  border-radius: 1rem;
  outline: none;
`

export const BreakLine = styled.span`
  display: block;
`
