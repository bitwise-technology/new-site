import { ContactModalContext } from 'contexts/ContactModal'
import Image from 'next/image'
import { useContext, useState } from 'react'
import Input from '../Input'
import RadioInput from '../RadioInput'
import TextAreaInput from '../TextAreaInput'
import {
  BreakLine,
  ContactModalBody,
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

interface ContactInfo {
  name: string
  company: string
  email: string
  phone: string
  wayOfContact: string
  message: string
}

const ContactModal = () => {
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

  const handleInputChange = ({
    target: input
  }: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo((oldContactInfo) => ({
      ...oldContactInfo,
      [input.name]: input.value
    }))
  }

  return (
    <ContactModalContainer
      data-testid="contact_modal"
      style={{ transform: `scale(${showContactModal ? '1' : '0'})` }}
    >
      <ContactModalClose onClick={handleCloseModal}>X</ContactModalClose>
      <ContactModalHeader>
        <ContactModalTitle>
          Preencha o formulário e inicie <BreakLine /> a sua{' '}
          <strong> transformação digital </strong>
        </ContactModalTitle>
        <ContactModalLogoContainer>
          <Image
            src="/img/Logo.svg"
            width={122}
            height={43}
            layout="intrinsic"
          />
        </ContactModalLogoContainer>
      </ContactModalHeader>
      <ContactModalBody>
        <ContactModalInputs>
          <Input
            data-testid="contact_input"
            label="Nome"
            value={contactInfo.name}
            onChange={handleInputChange}
            name="name"
            id="name"
            required
            placeholder="Digite seu nome..."
            autoComplete="off"
            type="text"
          />
          <Input
            data-testid="contact_input"
            label="Empresa"
            value={contactInfo.company}
            onChange={handleInputChange}
            required
            name="company"
            id="company"
            placeholder="Digite o nome da sua empresa..."
            autoComplete="off"
            type="text"
          />
          <Input
            data-testid="contact_input"
            label="Email"
            value={contactInfo.email}
            onChange={handleInputChange}
            name="email"
            id="email"
            required
            placeholder="Digite seu email..."
            autoComplete="off"
            type="email"
          />
          <Input
            data-testid="contact_input"
            label="Telefone"
            value={contactInfo.phone}
            onChange={handleInputChange}
            required
            name="phone"
            id="phone"
            placeholder="Digite seu telefone..."
            autoComplete="off"
            type="phone"
          />
        </ContactModalInputs>
        <ContactModalRadioInputs>
          <ContactModalRadioInputsText>
            Tenho preferência pelo contato por :
          </ContactModalRadioInputsText>
          <RadioInput
            data-testid="contact_radio_input"
            name="wayOfContact"
            id="wayOfContact__email"
            label="Email"
            value="email"
            isChecked={contactInfo.wayOfContact === 'email' ? true : false}
            onChange={handleInputChange}
          />
          <RadioInput
            data-testid="contact_radio_input"
            name="wayOfContact"
            id="wayOfContact__id"
            label="Telefone"
            value="phone"
            isChecked={contactInfo.wayOfContact === 'phone' ? true : false}
            onChange={handleInputChange}
          />
        </ContactModalRadioInputs>

        <ContactModalTextAreaContainer>
          <TextAreaInput
            style={{ width: '40%', height: '10vh' }}
            label="Escreva o que você espera que a Bitwise faça pelo seu negócio:"
          />
        </ContactModalTextAreaContainer>
        <SubmitButtonContainer>
          <StyledSubmitButton type="submit">Enviar</StyledSubmitButton>
        </SubmitButtonContainer>
      </ContactModalBody>
    </ContactModalContainer>
  )
}

export default ContactModal
