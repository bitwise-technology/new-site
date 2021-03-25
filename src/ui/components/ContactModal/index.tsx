import { ContactModalContext } from 'contexts/ContactModal'
import { useContext, useState } from 'react'
import { validateEmail } from 'helpers/validators/email/EmailValidator'
import { validatePhone } from 'helpers/validators/phone/PhoneValidator'
import Input from '../Input'
import RadioInput from '../RadioInput'
import TextAreaInput from '../TextAreaInput'
import {
  ContactModalForm,
  ContactModalClose,
  ContactModalContainer,
  ContactModalHeader,
  ContactModalInputs,
  ContactModalLogoContainer,
  ContactModalRadioInputs,
  ContactModalRadioInputsText,
  ContactModalTextAreaContainer,
  ContactModalTitle,
  StyledSubmitButton,
  SubmitButtonContainer
} from './ContactModalStyles'
import { phoneMask } from 'helpers/masks/phone/PhoneMask'
import { LanguagesContext } from 'contexts/LanguagesContext'

import strings from '../../../languages/language'
import parse from 'html-react-parser'
import { ContactModalResponseContext } from 'contexts/ModalResponse'
import { sendEmail } from 'services/email/sendEmail'
import { requiredValidator } from 'helpers/validators/required/RequiredValidator'

interface ContactInfo {
  name: string
  company: string
  email: string
  phone: string
  wayOfContact: string
  message: string
  [key: string]: string
}

type Errors = 'required' | 'invalidPhone' | 'invalidEmail' | ''

const ContactModal = () => {
  const { selectedLanguage } = useContext(LanguagesContext)

  const { showContactModal, setShowContactModal } = useContext(
    ContactModalContext
  )

  const { setShowContactModalResponse, setStatusCode } = useContext(
    ContactModalResponseContext
  )

  const handleCloseModal = (event: React.MouseEvent<Element>) => {
    event.preventDefault()
    setShowContactModal && setShowContactModal(false)
  }

  const [errors, setErrors] = useState<ContactInfo>({
    company: '',
    email: '',
    message: '',
    name: '',
    wayOfContact: '',
    phone: ''
  })

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    company: '',
    email: '',
    message: '',
    name: '',
    wayOfContact: 'email',
    phone: ''
  })

  const validators: { [key: string]: Array<(value: string) => string> } = {
    email: [validateEmail],
    phone: [validatePhone],
    name: [requiredValidator],
    company: [requiredValidator],
    message: [requiredValidator]
  }

  const masks: { [key: string]: (value: string) => string } = {
    phone: phoneMask
  }

  const handleInputChange = ({
    target: input
  }: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const inputName = input.name
    let inputValue = input.value

    const shouldMaskValue = masks[inputName] ? true : false

    if (shouldMaskValue) {
      inputValue = masks[inputName](inputValue)
    }

    const shouldValidateValue = validators[inputName]

    if (shouldValidateValue) {
      validators[inputName].forEach((validator) => {
        let errorString = ''
        const error: Errors = validator(inputValue) as Errors
        if (error !== '') {
          errorString = strings[selectedLanguage].errors[error]
        }

        setErrors((oldErrors) => ({
          ...oldErrors,
          [inputName]: errorString
        }))
      })
    }

    setContactInfo((oldContactInfo) => ({
      ...oldContactInfo,
      [inputName]: inputValue
    }))
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValidForm = Object.values(errors).every(
      (value: string) => value === ''
    )

    if (!isValidForm) {
      return
    }
    const response = await sendEmail(contactInfo)

    switch (response.status) {
      case 500: {
        setShowContactModal && setShowContactModal(false)
        setStatusCode && setStatusCode(500)
        setShowContactModalResponse && setShowContactModalResponse(true)
        setTimeout(() => {
          setShowContactModalResponse && setShowContactModalResponse(false)
        }, 5000)
        break
      }
      default: {
        setShowContactModal && setShowContactModal(false)
        setStatusCode && setStatusCode(200)
        setShowContactModalResponse && setShowContactModalResponse(true)

        setTimeout(() => {
          setShowContactModalResponse && setShowContactModalResponse(false)
        }, 5000)
      }
    }
  }

  const modalStrings = strings[selectedLanguage].contact_modal

  return (
    <ContactModalContainer
      data-testid="contact_modal"
      style={{
        visibility: showContactModal ? 'visible' : 'hidden',
        opacity: showContactModal ? '1' : '0',
        top: showContactModal ? '0%' : '50%'
      }}
    >
      <ContactModalClose
        src="/img/close_icon_modal.svg"
        alt="Contact Modal Close Icon"
        onClick={handleCloseModal}
      ></ContactModalClose>
      <ContactModalHeader>
        <ContactModalTitle>{parse(modalStrings.title)}</ContactModalTitle>
        <ContactModalLogoContainer>
          <img src="/img/Logo.svg" alt="Logo da Bitwise" />
        </ContactModalLogoContainer>
      </ContactModalHeader>
      <ContactModalForm onSubmit={handleFormSubmit}>
        <ContactModalInputs>
          <Input
            error={errors.name}
            data-testid="contact_input"
            label={modalStrings.inputs.name.label}
            value={contactInfo.name}
            onChange={handleInputChange}
            name="name"
            id="name"
            required
            placeholder={modalStrings.inputs.name.placeholder}
            autoComplete="off"
            type="text"
          />
          <Input
            error={errors.company}
            data-testid="contact_input"
            label={modalStrings.inputs.company.label}
            value={contactInfo.company}
            onChange={handleInputChange}
            required
            name="company"
            id="company"
            placeholder={modalStrings.inputs.company.placeholder}
            autoComplete="off"
            type="text"
          />
          <Input
            error={errors.email}
            data-testid="contact_input"
            label={modalStrings.inputs.email.label}
            value={contactInfo.email}
            onChange={handleInputChange}
            name="email"
            id="email"
            required
            placeholder={modalStrings.inputs.email.placeholder}
            autoComplete="off"
            type="email"
          />
          <Input
            error={errors.phone}
            data-testid="contact_input"
            label={modalStrings.inputs.phone.label}
            value={contactInfo.phone}
            onChange={handleInputChange}
            required
            name="phone"
            id="phone"
            placeholder={modalStrings.inputs.phone.placeholder}
            autoComplete="off"
            type="phone"
          />
        </ContactModalInputs>
        <ContactModalRadioInputs>
          <ContactModalRadioInputsText>
            {modalStrings.preferred_contact_way.title}
          </ContactModalRadioInputsText>
          <RadioInput
            data-testid="contact_radio_input"
            name="wayOfContact"
            id="wayOfContact__email"
            label={modalStrings.preferred_contact_way.radio.first}
            value="email"
            isChecked={contactInfo.wayOfContact === 'email' ? true : false}
            onChange={handleInputChange}
          />
          <RadioInput
            data-testid="contact_radio_input"
            name="wayOfContact"
            id="wayOfContact__id"
            label={modalStrings.preferred_contact_way.radio.second}
            value="phone"
            isChecked={contactInfo.wayOfContact === 'phone' ? true : false}
            onChange={handleInputChange}
          />
        </ContactModalRadioInputs>

        <ContactModalTextAreaContainer>
          <TextAreaInput
            onChange={handleInputChange}
            id="message"
            value={contactInfo.message}
            name="message"
            label={modalStrings.what_customer_want_from_bitwise}
          />
        </ContactModalTextAreaContainer>
        <SubmitButtonContainer>
          <StyledSubmitButton type="submit">
            {modalStrings.button}
          </StyledSubmitButton>
        </SubmitButtonContainer>
      </ContactModalForm>
    </ContactModalContainer>
  )
}

export default ContactModal
