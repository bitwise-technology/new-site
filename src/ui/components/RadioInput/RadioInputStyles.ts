import styled from 'styled-components'

export const RadioInputContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const StyledRadioInput = styled.input`
  display: none;

  &:checked + label > span::before {
    opacity: 1;
  }
`

export const StyledRadio = styled.span`
  width: 1.8rem;
  height: 1.8rem;
  border: 2px solid #5a3d5c;
  background-color: none;
  border-radius: 50%;
  margin-right: 1rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    opacity: 0;
    transition: all 0.2s;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    background-color: #5a3d5c;
    border-radius: 50%;
  }
`
export const RadioInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #5a3d5c;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #5a3d5c;
    cursor: pointer;
  }
`
