import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  height: 88px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* background-color: #fff; */
  position: absolute;
  top: 0;
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

export const MenuItem = styled.a`
  &:nth-child(0) {
    margin-left: 18px;
  }
  padding: 12px 14px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 8px;
`

export const Right = styled.div``

export const Button = styled.button`
  padding: 12px 10px;
  background-color: transparent;
  font-size: 18px;
  text-align: center;
  border-radius: 4px;
  border-style: solid;
  border-color: #fff;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #fff;
    color: #1c2429;
  }
`
