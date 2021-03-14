import styled from 'styled-components'

export const RadioInputContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const StyledRadioInput = styled.input`
  display: none;

  &:checked + label::before {
    background-color: #5a3d5c;
    border: none;
  }
`

export const RadioInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #5a3d5c;
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 2px solid #5a3d5c;
    background-color: none;
    border-radius: 50%;
    margin-right: 1rem;
  }
`
