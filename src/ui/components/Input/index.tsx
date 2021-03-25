import { InputHTMLAttributes } from 'react'
import {
  InputLabel,
  InputWrapper,
  StyledError,
  StyledInput
} from './InputStyles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error: string
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  error,
  ...otherProperties
}) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <StyledInput id={id} {...otherProperties} />
      {error && <StyledError>{error}</StyledError>}
    </InputWrapper>
  )
}

export default Input
