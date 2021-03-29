import styled from 'styled-components'

export const CopyrightWrapper = styled.div`
  width: 100%;
  background-color: #1c171c;
  padding-top: 6rem;
  font-family: 'Gotham';
  padding-bottom: 6rem;
`

export const CopyrightContainer = styled.div`
  width: 80%;
  margin: auto;

  @media screen and (min-width: 992px) {
    width: 80%;
    margin: auto;
  }

  @media screen and (min-width: 1500px) {
    width: 60%;
    margin: auto;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CopyrightText = styled.p`
  color: #d0c7d1;
  font-size: 1.2rem;

  line-height: 2rem;

  max-width: 50%;

  @media screen and (max-width: 768px) {
    width: 20rem;
    word-wrap: break-word;
    padding: 0.1rem;
  }
`

export const SocialMedias = styled.div`
  a {
    margin-right: 1rem;

    img {
      width: 24px;
      height: 24px;

      fill: #fff;
    }
  }
`

export const BackToTop = styled.button`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: 'Gotham';
  font-weight: bold;
  color: #d0c7d1;
  line-height: 2rem;

  cursor: pointer;

  background: none;
  outline: none;
  border: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
