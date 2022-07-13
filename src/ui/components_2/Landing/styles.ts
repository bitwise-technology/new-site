import styled from 'styled-components'

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
  color: #fff;
  font-weight: 700;
  font-size: 72px;
  line-height: 80px;
  letter-spacing: -2px;
  text-transform: uppercase;
`
export const Desc = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  margin-top: 18px;
`

export const Button = styled.button`
  margin-top: 66px;
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
