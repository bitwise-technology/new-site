import styled from 'styled-components'

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
  flex: 1;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h3`
  width: 296px;
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  color: #640055;
`

export const Sub = styled.p`
  margin-top: 24px;
  width: 336px;
  font-size: 15px;
  line-height: 24px;
  color: #1c2429;
`
