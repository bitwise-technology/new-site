import styled from 'styled-components'

export const ContactModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  height: 95vh;
  left: 0;
  right: 0;
  margin: 1rem auto;
  width: 90%;
  border-radius: 2rem;
  background-color: #fff;
  max-width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 0;
  }

  transition: all 0.5s;

  @media screen and (min-width: 1200px) {
    width: 60%;
    right: 0;
    left: auto;
    margin: 0;
  }
`

export const ContactModalHeader = styled.header`
  background-image: linear-gradient(359.39deg, #efeeee 0.46%, #ffffff 99.42%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 1rem;

  @media screen and (min-width: 1200px) {
    padding: 4rem 3rem;
  }
`

export const ContactModalTitle = styled.h3`
  color: #735775;
  font-size: 1.4rem;
  line-height: 2rem;
  strong {
    font-weight: bold;
  }

  @media screen and (min-width: 1200px) {
    font-size: 3rem;
    line-height: 4rem;
  }
`

export const ContactModalLogoContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
    }
  }
`

export const ContactModalForm = styled.form`
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

export const ContactModalInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  & > * {
    width: 45%;
  }
  @media screen and (min-width: 1200px) {
  }
`

export const ContactModalRadioInputs = styled.div`
  margin: 1rem auto 0 auto;
  width: 95%;
`

export const ContactModalRadioInputsText = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 400;

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

export const ContactModalClose = styled.img`
  position: absolute;
  right: 10%;
  top: 2%;
  cursor: pointer;
  width: 1.2rem;
  height: 1.2rem;
  @media screen and (min-width: 1200px) {
    width: 2rem;
    height: 2rem;
    right: 3%;
    top: 2%;
  }
`

export const SubmitButtonContainer = styled.div`
  margin: 2rem auto;
  width: 95%;
  padding-bottom: 1rem;

  @media screen and (min-width: 768px) {
    margin: 5rem auto;
  }
`

export const StyledSubmitButton = styled.button`
  background-color: #890877;

  color: #fff;
  font-size: 1.4rem;
  font-family: 'Gotham-Bold';

  width: 9rem;
  height: 5rem;

  border: none;
  border-radius: 1rem;
  outline: none;
`
