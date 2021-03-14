import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface IContactModalContext {
  showContactModal: boolean

  setShowContactModal: Dispatch<SetStateAction<boolean>>
}

export const ContactModalContext = createContext<Partial<IContactModalContext>>(
  {}
)

interface ContactModalContextProps {
  value?: IContactModalContext
}

const ContactModalProvider: React.FC<ContactModalContextProps> = ({
  children,
  value = {}
}) => {
  const [showContactModal, setShowContactModal] = useState(false)

  const valueObject =
    Object.keys(value).length !== 0
      ? value
      : { showContactModal, setShowContactModal }

  return (
    <ContactModalContext.Provider value={valueObject}>
      {children}
    </ContactModalContext.Provider>
  )
}

export default ContactModalProvider
