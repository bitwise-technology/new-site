import { Link as ReactItem } from 'react-scroll'
import styled, { css } from 'styled-components'
interface Props {
  typeProp: number
}

export const MobileContainer = styled.header`
  /* @media (min-width: 1150px) {
    display: none !important;
  } */
  display: none !important;
  background-color: transparent;
  height: 100px;
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  background-color: red;
`

export const MobileMenu = styled.button`
  border: none;
  background: none;
  @media (max-width: 1150px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Link = styled.a<Props>`
  margin-right: 12px;
  cursor: pointer;
  ${(p) =>
    p.typeProp === 1
      ? css`
          filter: brightness(0.9) invert(1);
        `
      : css``}
`

export const Container = styled.header<Props>`
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 10000;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 0;
  }

  ${(p) =>
    p.typeProp === 0
      ? css`
          @media screen and (min-width: 1025px) {
            background-color: transparent;
          }
        `
      : css`
          @media screen and (min-width: 1025px) {
            background-color: #fff;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          }
        `}
`
export const Logo = styled.img<Props>`
  filter: brightness(0) invert(1);

  @media screen and (min-width: 425px) {
    /* width: 80%; */
    /* background-color: blue;
     */
    width: 110px;
  }
  @media (min-width: 1025px) {
    /* width: 200px;
    height: 48px; */

    ${(p) =>
      p.typeProp === 1 &&
      css`
        filter: brightness(1);
      `}
  }
  /* @media (max-width: 1150px) {
    filter: brightness(0) invert(1);
  } */
`

export const Menu = styled.div`
  width: 90%;
  @media screen and (min-width: 1400px) {
    width: 80%;
    /* background-color: blue; */
  }
  @media screen and (min-width: 992px) {
    width: 90%;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  /* background-color: blueviolet; */
`

export const MenuItem = styled(ReactItem)<Props>`
  padding: 12px 14px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 2px;
  text-decoration: none !important;
  ${(p) =>
    p.typeProp === 0
      ? css`
          @media screen and (min-width: 1024px) {
            color: #fff;
          }
        `
      : css`
          @media screen and (min-width: 1024px) {
            color: #1c2429;
          }
        `}
`

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button<Props>`
  padding: 12px 10px;
  font-size: 18px;
  text-align: center;
  border-radius: 4px;

  cursor: pointer;
  transition: all 0.2s;

  border-style: solid;
  border-color: #fff;
  color: #fff;
  background-color: transparent;
  border-width: 1.5px;
  ${(p) =>
    p.typeProp === 0
      ? css`
          border-style: solid;
          border-color: #fff;
          color: #fff;
          background-color: transparent;
        `
      : css`
          @media screen and (min-width: 1025px) {
            border-style: solid;
            border-color: #640055;
            color: #fff;
            background-color: #640055;
          }
        `}
  &:hover {
    ${(p) =>
      p.typeProp === 0
        ? css`
            color: #1c2429;
          `
        : css`
            color: #640055;
          `}

    background-color: #fff;
  }
`
