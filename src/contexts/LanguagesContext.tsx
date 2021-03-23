import { createContext, Dispatch, SetStateAction, useState } from 'react'

type Languages = 'pt-BR' | 'en-EN'

interface ILanguagesContext {
  selectedLanguage: Languages

  setSelectedLanguage?: Dispatch<SetStateAction<Languages>>
}

export const LanguagesContext = createContext<ILanguagesContext>({
  selectedLanguage: 'pt-BR'
})

interface LanguagesContextProps {
  value?: ILanguagesContext
}

const LanguagesContextProvider: React.FC<LanguagesContextProps> = ({
  children,
  value = { selectedLanguage: 'pt-BR' }
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>('pt-BR')

  const valueObject =
    Object.keys(value).length === 2
      ? value
      : { selectedLanguage, setSelectedLanguage }

  return (
    <LanguagesContext.Provider value={valueObject}>
      {children}
    </LanguagesContext.Provider>
  )
}

export default LanguagesContextProvider
