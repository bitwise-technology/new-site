import styled from 'styled-components'

export const Container = styled.section`
  @media (max-width: 1150px) {
    display: none !important;
  }
  /* background-color: red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 420px;
  grid-column-gap: 15px;
  justify-items: center;
  align-items: center;
  width: 1120px;
  /* background-color: red; */
`

export const Item = styled.div`
  /* width: 340px; */
  height: 100%;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0 43px;

  transition: all 0.2s ease-in-out;

  &:hover {
    /* width: 350px;
    height: 430px; */
    transform: scale(1.05);
    /* outline: 4px solid #1599d6 !important; */
  }
`

export const ItemTitle = styled.h4`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -1px;
  text-align: center;
  color: #35002c;
  margin: 16px 0;
`

export const ItemDesc = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #35002c;
`
