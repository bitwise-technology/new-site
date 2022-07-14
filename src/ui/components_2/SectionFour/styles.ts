import styled from 'styled-components'

export const MobileContainer = styled.section`
  @media (min-width: 1150px) {
    display: none !important;
  }
  position: relative;
`

export const Container = styled.section`
  @media (max-width: 1150px) {
    display: none !important;
  }
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h3`
  @media (min-width: 1150px) {
    margin-top: 80px;
    margin-bottom: 80px;
    font-size: 56px;
    line-height: 64px;
  }
  @media (max-width: 1150px) {
    font-size: 44px;
    line-height: 56px;
    padding: 29px 16px 0 16px;
  }
  font-weight: 600;
  font-size: 56px;
  letter-spacing: -2px;
  color: #fff;
  text-align: center;
`
export const GridContainer = styled.div`
  /* background-color: red; */
  display: grid;
  @media (min-width: 1150px) {
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 60px;
    grid-row-gap: 80px;
  }
  @media (max-width: 1150px) {
    grid-template-columns: auto auto;
    grid-row-gap: 40px;
    background: url('/img/NYMobile.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
  }
  justify-items: center;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 250px;
`

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 0;
  right: 0;
  left: 0;
  width: 100%;
`
