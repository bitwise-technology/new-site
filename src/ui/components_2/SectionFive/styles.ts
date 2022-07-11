import styled from 'styled-components'

export const Container = styled.section`
  /* background-color: red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h3`
  margin-top: 80px;
  margin-bottom: 80px;
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: -2px;
  color: #fff;
  text-align: center;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 15px;
  justify-items: center;
  align-items: center;
  /* width: 1120px; */
`

export const Item = styled.div`
  width: 340px;
  height: 420px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease-in-out;

  &:hover {
    /* width: 350px;
    height: 430px; */
    transform: scale(1.05);
    /* outline: 4px solid #1599d6 !important; */
  }
`
