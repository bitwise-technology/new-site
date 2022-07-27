import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 24px;
  @media screen and (max-width: 680px) {
    padding: 0 4px;
  }
  background: #f7f7f7;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 680px) {
    height: fit-content;
  }
`

export const Image = styled.img`
  margin-left: 130px;
  @media screen and (max-width: 973px) {
    width: 328px;
    margin-left: 0;
  }
`

export const Center = styled.div`
  max-width: 1120px;
  display: flex;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Left = styled.div`
  flex: 1;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 12px;
  @media screen and (max-width: 320px) {
    padding: 0;
  }
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
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
  font-size: 16px;
  line-height: 24px;
  color: #1c2429;
`
