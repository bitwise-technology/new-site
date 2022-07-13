import styled from 'styled-components'

export const Container = styled.section`
  @media (max-width: 1150px) {
    display: none !important;
  }
  /* background-color: #640055; */
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
`

export const Layout = styled.div`
  display: flex;
  background-color: #fff;
  height: 100%;
  width: 100%;

  /* width: 1140px; */
  z-index: 10;
`

export const Title = styled.h4`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  /* or 125% */
  color: #ffffff;
  letter-spacing: -1px;
`

export const Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 26px;
`

export const Right = styled.div`
  padding: 80px 64px;
  background-color: #640055;
  padding-right: 10vw;
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

  &:hover {
    color: #fff;
    background-color: transparent;
  }
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  padding-top: 80px;
  padding-left: 10vw;
  position: relative;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
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

  transition: all 0.2s ease-in;
  margin-top: 36px;

  &:hover {
    color: #640055;
    background-color: transparent;
  }
  border-radius: 4px;
`

export const LeftTitle = styled.h4`
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: -2px;
  color: #640055;
`

export const LeftDesc = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #090c0e;
  margin-top: 24px;
`

export const LeftImg = styled.img`
  position: absolute;
  bottom: 0;
  right: -130px;
`
