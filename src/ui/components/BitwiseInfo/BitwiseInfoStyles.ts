import styled from 'styled-components'

export const InfoContainerWrapper = styled.section`
  width: 100%;
  background-color: #1c171c;
  font-family: 'Gotham';
`

export const InfoContainer = styled.div`
  padding-top: 6.2rem;
  padding-bottom: 6rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    padding-top: 4.2rem;
    padding-bottom: 4rem;
  }

  background-color: #1c171c;

  width: 80%;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #ff92f7;

  line-height: 2rem;

  font-size: 1.2rem;

  border-bottom: 3px solid #a51c92;
`

export const BackToTop = styled.p`
  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const LogoContainer = styled.div``

export const BitwiseMotto = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: 1px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Addresses = styled.p``

export const Address = styled.p`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Country = styled.span`
  font-family: 'Gotham-Bold';
  text-transform: uppercase;
  color: #fff;
`

export const Street = styled.span``

export const Reference = styled.span``

export const State = styled.span``
