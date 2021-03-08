import styled from 'styled-components'

export const ServicesContainer = styled.section`
  @media screen and (min-width: 1200px) {
    background-color: #534554;

    border-radius: 1rem;

    width: 80%;

    margin: auto;
  }
`

export const ServicesTitle = styled.h2`
  @media screen and (min-width: 1200px) {
    padding-top: 4.1rem;
    width: 90%;
    margin: auto;
    margin-bottom: 4.1rem;
    font-size: 2rem;
    color: #fff;

    position: relative;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 80%;
      width: 73%;
      border-bottom: 1px solid #fff;
      height: 1px;
    }
  }
`

export const ServicesBox = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    padding-bottom: 3.2rem;
  }
`

export const Service = styled.div``

export const ServiceTitle = styled.h3<{ titleBorderColor: string }>`
  @media screen and (min-width: 1200px) {
    color: #f0f0f0;

    font-size: 1.6rem;
    font-weight: 500;
    font-family: Montserrat;
    line-height: 2rem;

    position: relative;

    border-left: ${(props) => `2px solid #${props.titleBorderColor}`};

    padding-left: 1rem;

    margin: 1.5rem 0;
  }
`

export const ServiceDescription = styled.p`
  @media screen and (min-width: 1200px) {
    color: #f0f0f0;

    font-size: 1.4rem;
    line-height: 2rem;

    padding-left: 1.1rem;

    text-align: left;

    max-width: 18rem;
  }
`
