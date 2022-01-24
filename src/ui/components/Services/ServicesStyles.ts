import styled from 'styled-components'

export const ServicesContainerWrapper = styled.div`
  background-image: linear-gradient(to bottom, #f0f0f0, #fbfbfb);
  padding-bottom: 2rem;

  @media screen and (min-width: 768px) {
    padding-bottom: 9rem;
  }
`

export const ServicesContainer = styled.section`
  background-color: #534554;
  font-family: 'Gotham';
  box-shadow: 1px 1px 5px solid #ccc;

  @media screen and (min-width: 992px) {
    border-radius: 1rem;

    width: 90%;

    margin: auto;
  }
`

export const ServicesTitle = styled.h2`
  padding-top: 4.1rem;
  margin-bottom: 4.1rem;

  font-size: 2rem;

  color: #fff;

  text-align: center;
  font-family: 'Gotham';
  font-weight: bold;
  position: relative;

  @media screen and (min-width: 1200px) {
    width: 90%;
    margin: auto;
    position: relative;

    padding-top: 5rem;

    font-size: 2.2rem;

    text-align: left;

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
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  padding-bottom: 3.2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    & > * {
      width: 50%;
    }
  }

  @media screen and (min-width: 1200px) {
    justify-content: space-between !important;
    flex-wrap: nowrap;
    margin-top: 5rem;
    & > * {
      width: auto;
    }
  }
`

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.6rem 0;
  @media screen and (min-width: 768px) {
    justify-content: space-between;

    text-align: center;
    display: block;
  }

  @media screen and (min-width: 1200px) {
    text-align: left;
  }
`

export const ServiceText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  margin: 0 1rem;

  @media screen and (min-width: 1200px) {
    display: block;
    padding-left: 0;
    margin: 0;
  }
`

export const ServiceImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media screen and (max-width: 768px) {
    img {
      width: 8rem;
      height: 8rem;
    }
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const ServiceTitle = styled.h3<{ titleBorderColor: string }>`
  color: #f0f0f0;

  font-size: 1.6rem;
  font-weight: 500;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 2rem;

  position: relative;

  text-align: center;

  &::before {
    content: '';
    border-left: ${(props) => `2px solid #${props.titleBorderColor}`};
    width: 1rem;
    margin-right: 7px;
  }

  margin: 1.5rem 0;

  @media screen and (min-width: 1200px) {
    text-align: left;
    font-size: 1.6rem;
  }

  @media screen and (min-width: 1600px) {
    font-size: 1.9rem;
    margin: 1.5rem 0;
  }
`

export const ServiceDescription = styled.p`
  color: #f0f0f0;

  font-size: 1.4rem;
  line-height: 2rem;

  text-align: center;

  margin-left: 1rem;

  @media screen and (min-width: 768px) {
    max-width: 18rem;
    text-align: left;

    max-width: 100%;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.2rem;

    max-width: 30rem;
  }

  @media screen and (min-width: 1600px) {
    font-size: 1.4rem;

    max-width: 30rem;
  }
`
