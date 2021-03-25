import styled, { keyframes } from 'styled-components'

export const PartnersContainer = styled.section`
  background-color: #fbfbfb;
  padding-bottom: 9.5rem;
`

export const PartnersTitle = styled.p`
  text-align: center;
  color: #372e38;
  font-weight: 400;
  font-family: 'Gotham';
  font-size: 1.9rem;

  margin-bottom: 3rem;
`

const ScrollAnimation = keyframes`
	0% { transform: translateX(100px); }
	100% { transform: translateX(calc(-100px * 13))}
`

export const PartnersBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;

  width: 80%;

  margin: auto;

  .mobile-only {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 1200px) {
    overflow: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
    position: relative;
    align-items: center;
  }

  img {
    display: inline-block;

    margin: 0 1rem;

    @media screen and (max-width: 1200px) {
      max-width: 100px;
      animation: ${ScrollAnimation} 30s linear infinite;
    }
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;

    width: 80%;

    margin: auto;

    overflow: hidden;
  }
`
