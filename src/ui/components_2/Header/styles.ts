import styled, { css } from 'styled-components'
interface Props {
  typeProp: number
}

export const MobileContainer = styled.header`
  @media (min-width: 1150px) {
    display: none !important;
  }
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
`

export const MobileMenu = styled.button`
  border: none;
  background: none;
`

export const Container = styled.header<Props>`
  @media (max-width: 1150px) {
    display: none !important;
  }
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

  ${(p) =>
    p.typeProp === 0
      ? css`
          background-color: transparent;
        `
      : css`
          background-color: #fff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        `}
`
export const Logo = styled.img<Props>`
  @media (min-width: 1150px) {
    width: 200px;
    height: 48px;
    filter: brightness(0) invert(1);
  }
  @media (max-width: 1150px) {
    ${(p) =>
      p.typeProp === 0
        ? css`
            filter: brightness(0) invert(1);
          `
        : null}
  }
`

export const Menu = styled.div`
  /* background-color: blue; */
  width: 1120px;
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

export const MenuItem = styled.a<Props>`
  &:nth-child(0) {
    margin-left: 18px;
  }
  padding: 12px 14px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 8px;
  text-decoration: none !important;
  ${(p) =>
    p.typeProp === 0
      ? css`
          color: #fff;
        `
      : css`
          color: #1c2429;
        `}
`

export const Right = styled.div``

export const Button = styled.button<Props>`
  padding: 12px 10px;
  font-size: 18px;
  text-align: center;
  border-radius: 4px;

  cursor: pointer;
  transition: all 0.2s;
  ${(p) =>
    p.typeProp === 0
      ? css`
          border-style: solid;
          border-color: #fff;
          color: #fff;
          background-color: transparent;
        `
      : css`
          border-style: solid;
          border-color: #640055;
          color: #fff;
          background-color: #640055;
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
