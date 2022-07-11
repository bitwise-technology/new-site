import { createContext, Dispatch, SetStateAction, useState } from 'react'
import moment from 'moment-timezone'
import ct from 'countries-and-timezones'

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
  const timeZone = moment.tz.guess()

  const details = ct.getTimezone(timeZone)

  const country = details?.countries[0]

  const language = country === 'BR' ? 'pt-BR' : 'en-EN'

  const [selectedLanguage, setSelectedLanguage] = useState<Languages>(language)

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
