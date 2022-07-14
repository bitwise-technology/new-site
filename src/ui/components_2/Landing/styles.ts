import styled from 'styled-components'

export const MobileContainer = styled.section`
  @media (min-width: 1150px) {
    display: none !important;
  }

  background: url('/img/image 11.png');

  @media (min-width: 563px) {
    background: url('/img/Spa.svg');
  }
  padding-top: 100px;
  padding-bottom: 131px;
  background-size: cover;

  /* height: 100vh; */
  /* width: 100vw; */
`

export const Container = styled.section`
  @media (max-width: 1150px) {
    display: none !important;
  }
  background-color: transparent;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;

  div {
    width: 1120px;
    /* background-color: #fff; */
  }
`

export const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
`
export const Title = styled.h4`
  @media (max-width: 1150px) {
    font-weight: 600;
    font-size: 34px;
    line-height: 44px;
    margin: 80px 16px 0px 16px;
  }
  @media (min-width: 1150px) {
    font-weight: 700;
    font-size: 72px;
    line-height: 80px;
  }
  letter-spacing: -2px;
  text-transform: uppercase;
  color: #fff;
`
export const Desc = styled.p`
  @media (max-width: 1150px) {
    margin: 48px 16px 0px 16px;
  }
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  margin-top: 18px;
`

export const Button = styled.button`
  @media (max-width: 1150px) {
    margin: 84px 16px 0px 16px;
  }
  @media (min-width: 1150px) {
    margin-top: 66px;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 12px 15px;
  color: #fff;
  border: 1.5px solid #fff;
  border-radius: 4px;
  background-color: transparent;
`
