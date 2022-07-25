import styled, { css } from 'styled-components'

export const Container = styled.section`
  /* @media (max-width: 1150px) {
    display: none !important;
  } */
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: green; */

  justify-content: center;

  background-color: transparent;

  /* @media screen and (max-width: 530px) { */
  /* background: url('/img/saa.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: auto 80%; */
  /* } */
`
export const Title = styled.h3`
  /* background-color: blue; */

  margin-top: 80px;
  margin-bottom: 80px;
  font-size: 56px;
  line-height: 64px;
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
  margin-top: 50px;

  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 60px;
  grid-row-gap: 80px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto auto auto;
    grid-row-gap: 40px;
  }

  @media screen and (max-width: 730px) {
    grid-template-columns: auto auto;
    grid-row-gap: 40px;
  }

  /* @media (max-width: 1150px) {
    background: url('/img/NYMobile.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
  } */
  justify-items: center;
  align-items: center;
  padding-bottom: 100px;
`

interface IImg {
  value?: number
}

export const Img = styled.img<IImg>`
  @media screen and (max-width: 790px) {
    ${(p) =>
      p.value
        ? css`
            width: ${p.value}px;
          `
        : css`
            width: 130px;
          `}
  }
`

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 0;
  right: 0;
  left: 0;
  width: 100%;
`
