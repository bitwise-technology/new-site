import { TextareaHTMLAttributes } from 'react'
import { StyledTextArea, TextAreaLabel } from './TextAreaInputStyles'

interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  id,
  ...otherProperties
}) => {
  return (
    <>
      <TextAreaLabel htmlFor={id}>{label}</TextAreaLabel>
      <StyledTextArea id={id} {...otherProperties} />
    </>
  )
}

export default TextAreaInput
