import { InputHTMLAttributes } from 'react'
import {
  RadioInputContainer,
  RadioInputLabel,
  StyledRadio,
  StyledRadioInput
} from './RadioInputStyles'

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isChecked: boolean
}

const RadioInput: React.FC<RadioInputProps> = ({
  label,
  isChecked,
  id,
  ...othersProperties
}) => {
  return (
    <RadioInputContainer>
      <StyledRadioInput
        checked={isChecked}
        type="radio"
        id={id}
        {...othersProperties}
      />
      <RadioInputLabel htmlFor={id}>
        <StyledRadio />
        {label}
      </RadioInputLabel>
    </RadioInputContainer>
  )
}

export default RadioInput
