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
  /* @media (max-width: 1150px) {
    display: none !important;
  } */
  background: url('/img/Spa.svg');
  background-size: cover;
  height: 100vh;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 680px) {
    height: fit-content;
    padding: 100px 0;
  }
  /* z-index: 100; */

  div {
    /* width: 1120px; */
    width: 90%;
    /* background-color: red; */
    box-sizing: border-box;
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
  font-weight: 700;
  font-size: 52px;
  margin-top: 80px;
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 34px;
    line-height: 44px;
    margin: 80px 16px 0px 16px;
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
  cursor: pointer;
  margin-top: 66px;
  @media (max-width: 1150px) {
    margin: 84px 16px 0px 16px;
  }

  @media (max-width: 376px) {
    /* background-color: red; */
    width: 100%;
    margin: 84px auto 0px auto;
    /* margin: 84px 16px 0px 16px; */
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
