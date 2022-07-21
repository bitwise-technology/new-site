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
  padding: 0 24px;
  @media screen and (max-width: 680px) {
    padding: 0 4px;
  }
  background: #edf0f2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 680px) {
    height: fit-content;
  }
`

export const Center = styled.div`
  max-width: 1120px;
  display: flex;
  /* justify-content: space-around; */

  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: center;
  }
  /* background: blue; */
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  @media screen and (max-width: 680px) {
    align-items: center;
  }
  /* background-color: red; */
  padding: 12px;
`
export const Image = styled.img`
  margin-right: 100px;
  @media screen and (max-width: 973px) {
    width: 328px;
    margin-right: 0;
  }
`
export const Right = styled.div`
  flex: 1;
  padding: 12px;

  /* @media screen and (max-width: 680px) {
    align-items: center;
  } */

  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: blue; */
`

export const Title = styled.h3`
  white-space: pre-wrap;
  @media screen and (max-width: 680px) {
    margin-top: 32px;
  }

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
  white-space: pre-wrap;
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
