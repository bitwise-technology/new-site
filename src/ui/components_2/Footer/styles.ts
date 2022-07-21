import styled from 'styled-components'

export const MobileContainer = styled.section`
  @media (min-width: 1150px) {
    display: none !important;
  }
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`

export const Container = styled.section`
  /* background-color: #640055; */
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 900px) {
    height: auto;
  }
`

export const Layout = styled.div`
  display: flex;
  background-color: #fff;
  height: 100%;
  width: 100%;
  z-index: 10;

  @media screen and (max-width: 900px) {
    /* background-color: red; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Title = styled.h4`
  white-space: pre-wrap;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  /* or 125% */
  color: #ffffff;
  letter-spacing: -1px;

  @media (max-width: 1150px) {
    margin: 32px 30px;
  }
`

export const Desc = styled.p`
  white-space: pre-wrap;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  max-width: 450px;
  @media (max-width: 1150px) {
    /* margin: 32px 30px; */
    padding: 0 30px;
  }
  margin-top: 26px;
`

export const MobileImage = styled.div`
  /* background-color: red; */
  background-image: url('/img/3d.svg');
  height: 676px;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: -90px;
  background-size: 400px 592px;
  position: relative;
`

export const Right = styled.div`
  padding: 40px 0 0 64px;
  background-color: #640055;
  flex: 1;
  /* padding-right: 10vw; */
  @media screen and (max-width: 900px) {
    padding: 12px;
    width: 100%;
  }
`

export const Icon = styled.img`
  filter: brightness(0);
`

export const Button = styled.button`
  display: flex;
  padding: 12px 19px;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  color: #4d0041;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;

  transition: all 0.2s ease-in;
  margin-top: 36px;

  @media (max-width: 1150px) {
    margin: 64px 30px;
    /* padding: 0 30px; */
  }

  &:hover {
    color: #fff;
    background-color: transparent;
    img {
      filter: brightness(0) invert(1);
    }
  }
`

export const Left = styled.div`
  flex: 2;
  display: flex;
  padding-top: 80px;
  padding-left: 10vw;
  position: relative;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  @media screen and (max-width: 900px) {
    padding-left: 0;
    align-items: center;
  }
`

export const Links = styled.div`
  @media (max-width: 1150px) {
    margin: 36px 30px;
    margin-top: 0;
  }
  @media screen and (max-width: 900px) {
    margin: 0;
    margin-top: 10px;
  }
`
export const LeftButton = styled.button`
  display: flex;
  padding: 12px 19px;
  background-color: #640055;
  border: 2px solid #640055;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 36px;

  @media (max-width: 1150px) {
    align-self: flex-start;
    margin: 36px 30px;
  }

  @media screen and (max-width: 900px) {
    margin: 0;
    margin-top: 36px;
  }

  transition: all 0.2s ease-in;
  margin-top: 36px;

  &:hover {
    color: #640055;
    background-color: transparent;
  }
  border-radius: 4px;
`

export const LeftTitle = styled.h4`
  white-space: pre-wrap;
  margin-bottom: 30px;
  @media (max-width: 1150px) {
    font-size: 48px;
    line-height: 56px;
    margin: 40px 30px 0 30px;
  }
  @media screen and (max-width: 900px) {
    margin: 0;
  }
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: -2px;
  color: #640055;
`

export const LeftDesc = styled.p`
  white-space: pre-wrap;
  @media (max-width: 1150px) {
    margin: 28px 30px 0 30px;
  }

  @media screen and (max-width: 900px) {
    margin: 0;
    margin-top: 24px;
  }

  font-size: 16px;
  line-height: 24px;
  color: #090c0e;
`

export const LeftImg = styled.img`
  position: absolute;
  width: 70%;
  bottom: 0;
  right: -160px;

  @media screen and (max-width: 900px) {
    display: none !important;
  }

  @media (max-width: 1145px) {
    width: 60%;
  }
`
