import { ContactModalContext } from 'contexts/ContactModal'
import Image from 'next/image'
import { useContext, useMemo, useState } from 'react'
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

interface ContactInfo {
  name: string
  company: string
  email: string
  phone: string
  wayOfContact: string
  message: string
  [key: string]: string
}

const ContactModal = () => {
  const { selectedLanguage } = useContext(LanguagesContext)

  const { showContactModal, setShowContactModal } = useContext(
    ContactModalContext
  )

  const handleCloseModal = (event: React.MouseEvent<Element>) => {
    event.preventDefault()
    setShowContactModal && setShowContactModal(false)
  }

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    company: '',
    email: '',
    message: '',
    name: '',
    wayOfContact: '',
    phone: ''
  })

  const validators = useMemo(
    () => ({
      email: validateEmail,
      phone: validatePhone
    }),
    []
  )

  const masks = useMemo(
    () => ({
      phone: phoneMask
    }),
    []
  )

  const handleInputChange = ({
    target: input
  }: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = input.name
    let inputValue = input.value

    Object.entries(masks).map(([inputToApplyMask, maskFunction]) => {
      if (inputName === inputToApplyMask) {
        inputValue = maskFunction(inputValue)
      }
    })

    setContactInfo((oldContactInfo) => ({
      ...oldContactInfo,
      [inputName]: inputValue
    }))
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    let isFormValid = false

    Object.entries(validators).forEach(([validateValue, validatorFuction]) => {
      isFormValid = validatorFuction(contactInfo[validateValue])
    })

    if (!isFormValid) {
      return
    }
  }

  const modalStrings = strings[selectedLanguage].contact_modal

  return (
    <ContactModalContainer
      data-testid="contact_modal"
      style={{ transform: `scale(${showContactModal ? '1' : '0'})` }}
    >
      <ContactModalClose onClick={handleCloseModal}>X</ContactModalClose>
      <ContactModalHeader>
        <ContactModalTitle>{parse(modalStrings.title)}</ContactModalTitle>
        <ContactModalLogoContainer>
          <Image
            src="/img/Logo.svg"
            width={122}
            height={43}
            layout="intrinsic"
          />
        </ContactModalLogoContainer>
      </ContactModalHeader>
      <ContactModalForm onSubmit={handleFormSubmit}>
        <ContactModalInputs>
          <Input
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
          <TextAreaInput label={modalStrings.what_customer_want_from_bitwise} />
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
