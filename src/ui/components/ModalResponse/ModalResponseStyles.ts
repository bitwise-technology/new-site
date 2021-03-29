import styled from 'styled-components'

interface ModalResposneContainerProps {
  isValidFeedback: boolean
}

export const ModalResponseContainer = styled.div<ModalResposneContainerProps>`
  background-color: ${(props) =>
    props.isValidFeedback ? '#890877' : '#B11523'};
  max-width: 78.8rem;

  position: absolute;
  top: 0%;
  right: 0;

  z-index: 999;

  padding-top: 4rem;
  padding-left: 2rem;
  padding-bottom: 5rem;

  color: #fff;

  @media screen and (min-width: 1200px) {
    padding-bottom: 0;
    width: 78.8rem;
    height: 19.8rem;
    top: 1%;
    border-radius: 1rem;
    padding-left: 4rem;
  }
`

export const ModalResponseTitle = styled.h3`
  font-family: 'Gotham-Bold';
  font-size: 3rem;
  line-height: 4rem;
`

export const ModalResponseText = styled.p`
  font-family: 'Gotham';
  font-size: 2rem;
  line-height: 4rem;
  margin-top: 3rem;

  @media screen and (min-width: 1200px) {
    font-size: 3rem;
    margin-top: 0;
  }
`

export const ModalResponseSocialMediaContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
`

export const ModalResponseSocialMediaText = styled.p`
  font-family: 'Gotham';
  font-size: 1.4rem;
  max-width: 62.6rem;
  line-height: 3rem;

  width: 70%;

  @media screen and (min-width: 1200px) {
    font-size: 1.4rem;
    line-height: 4rem;
    width: 100%;
  }
`

export const ModalResponseSocialMedias = styled.div`
  a {
    margin-right: 1rem;

    img {
      width: 24px;
      height: 24px;

      fill: #fff;
    }
  }
  & > img:not(:first-child) {
    margin-left: 1rem;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 1.8rem;
    & > img:not(:first-child) {
      margin-left: 1rem;
    }
  }
`

export const ModalResponseClose = styled.img`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 1rem;
  height: 1rem;
  color: #fff;
`
