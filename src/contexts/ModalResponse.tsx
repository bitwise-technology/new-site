import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface IContactModalResponseContext {
  showContactModalResponse: boolean
  setShowContactModalResponse: Dispatch<SetStateAction<boolean>>

  statusCode: number
  setStatusCode: Dispatch<SetStateAction<number>>
}

export const ContactModalResponseContext = createContext<
  Partial<IContactModalResponseContext>
>({})

interface ContactModalResponseContextProps {
  value?: IContactModalResponseContext
}

const ContactModalResponseProvider: React.FC<ContactModalResponseContextProps> = ({
  children,
  value = {}
}) => {
  const [showContactModalResponse, setShowContactModalResponse] = useState(
    false
  )

  const [statusCode, setStatusCode] = useState(0)

  const valueObject =
    Object.keys(value).length !== 0
      ? value
      : {
          showContactModalResponse,
          setShowContactModalResponse,
          statusCode,
          setStatusCode
        }

  return (
    <ContactModalResponseContext.Provider value={valueObject}>
      {children}
    </ContactModalResponseContext.Provider>
  )
}

export default ContactModalResponseProvider
