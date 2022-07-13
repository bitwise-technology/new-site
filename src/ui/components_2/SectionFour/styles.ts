import styled from 'styled-components'

export const Container = styled.section`
  @media (max-width: 1150px) {
    display: none !important;
  }
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
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
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 60px;
  grid-row-gap: 80px;
  justify-items: center;
  align-items: center;
`
