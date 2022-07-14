import styled from 'styled-components'

export const MobileContainer = styled.section`
  @media (min-width: 1150px) {
    display: none !important;
  }
  background: #edf0f2;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  align-items: center;
`

export const Container = styled.section`
  @media (max-width: 1150px) {
    display: none !important;
  }
  background: #edf0f2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .center {
    background-color: aliceblue;
  }
`

export const Center = styled.div`
  width: 1120px;
  display: flex;
  /* background: #000; */
`

export const Left = styled.div`
  /* flex: 1; */
  width: 592px;
  height: 592px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  @media (min-width: 1150px) {
    width: 328px;
    height: 328px;
  }
`
export const Right = styled.div`
  flex: 1;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h3`
  @media (min-width: 1150px) {
    font-size: 56px;
    line-height: 64px;
  }
  @media (max-width: 1150px) {
    font-size: 44px;
    line-height: 56px;
    padding: 0 30px;
  }
  @media (min-width: 1150px) {
    width: 296px;
  }
  font-weight: 600;
  line-height: 64px;
  color: #640055;
`

export const Sub = styled.p`
  margin-top: 24px;
  @media (max-width: 1150px) {
    padding: 0 30px;
    max-width: 336px;
  }

  @media (min-width: 1150px) {
    width: 336px;
  }
  font-size: 15px;
  line-height: 24px;
  color: #1c2429;
`
