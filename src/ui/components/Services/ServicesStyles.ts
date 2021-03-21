import styled from 'styled-components'

export const ServicesContainer = styled.section`
  background-color: #534554;

  @media screen and (min-width: 1200px) {
    border-radius: 1rem;

    width: 80%;

    margin: auto;
  }
`

export const ServicesTitle = styled.h2`
  padding-top: 4.1rem;
  margin-bottom: 4.1rem;

  font-size: 2rem;

  color: #fff;

  text-align: center;

  position: relative;

  @media screen and (min-width: 1200px) {
    width: 90%;
    margin: auto;
    position: relative;

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
    justify-content: space-between;
    flex-wrap: nowrap;

    & > * {
      width: auto;
    }
  }
`

export const Service = styled.div`
  display: flex;
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
  flex: 1;
  margin: 0 1rem;

  @media screen and (min-width: 1200px) {
    display: block;
    padding-left: 0;
  }
`

export const ServiceImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const ServiceTitle = styled.h3<{ titleBorderColor: string }>`
  color: #f0f0f0;

  font-size: 1.6rem;
  font-weight: 500;
  font-family: Montserrat;
  line-height: 2rem;

  position: relative;

  border-left: ${(props) => `2px solid #${props.titleBorderColor}`};

  padding-left: 1rem;

  margin: 1.5rem 0;

  @media screen and (min-width: 768px) {
    border: none;
  }

  @media screen and (min-width: 1200px) {
    margin: 1.5rem 0;
  }
`

export const ServiceDescription = styled.p`
  color: #f0f0f0;

  font-size: 1.4rem;
  line-height: 2rem;

  padding-left: 1.1rem;

  text-align: left;

  max-width: 18rem;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }

  @media screen and (min-width: 1200px) {
    color: #f0f0f0;

    font-size: 1.4rem;
    line-height: 2rem;

    padding-left: 1.1rem;

    max-width: 18rem;
  }
`
