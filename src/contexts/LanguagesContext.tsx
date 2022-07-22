import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import moment from 'moment-timezone'
import ct from 'countries-and-timezones'

type Languages = 'pt-BR' | 'en-EN'

interface ILanguagesContext {
  selectedLanguage: Languages

  setSelectedLanguage?: Dispatch<SetStateAction<Languages>>

  toggleSelect?: () => void
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

  const toggleSelect = useCallback(() => {
    setSelectedLanguage(selectedLanguage === 'pt-BR' ? 'en-EN' : 'pt-BR')
  }, [selectedLanguage])

  const valueObject =
    Object.keys(value).length === 2
      ? value
      : { selectedLanguage, setSelectedLanguage, toggleSelect }

  return (
    <LanguagesContext.Provider value={valueObject}>
      {children}
    </LanguagesContext.Provider>
  )
}
export const useLanguage = () => useContext(LanguagesContext)

export default LanguagesContextProvider
