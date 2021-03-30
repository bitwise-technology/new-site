import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

export const InputLabel = styled.label`
  color: #5a3d5c;
  font-size: 1.4rem;
  line-height: 4rem;
  @media screen and (min-width: 768px) {
    line-height: 5rem;
  }
`

export const StyledInput = styled.input`
  border: 2px solid #5a3d5c;

  outline: none;

  padding: 1rem;

  &:focus {
    border-color: #e5c3d1;
  }
`

export const StyledError = styled.p`
  color: #b11523;
  font-size: 1.5rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  padding: 1rem 0;
`
