import { InputHTMLAttributes } from 'react'
import { InputLabel, InputWrapper, StyledInput } from './InputStyles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<InputProps> = ({ label, id, ...otherProperties }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <StyledInput id={id} {...otherProperties} />
    </InputWrapper>
  )
}

export default Input
