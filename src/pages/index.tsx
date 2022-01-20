import React from 'react'
import ContactModalProvider from 'contexts/ContactModal'

import BitwiseInfo from 'ui/components/BitwiseInfo'
import CallToActionSection from 'ui/components/CallToActionSection'
import ContactModal from 'ui/components/ContactModal'
import Copyright from 'ui/components/Copyright'
import Header from 'ui/components/Header'
import Motto from 'ui/components/Motto'
import Partners from 'ui/components/Partners'
import Services from 'ui/components/Services'
import WhereWeAre from 'ui/components/WhereWeAre'
import ProgrammingLanguages from 'ui/components/ProgrammingLanguages'
import LanguagesContextProvider from 'contexts/LanguagesContext'
import ModalResponse from 'ui/components/ModalResponse'
import ContactModalResponseProvider from 'contexts/ModalResponse'

const Home = () => {
  return (
    <LanguagesContextProvider>
      <ContactModalProvider>
        <ContactModalResponseProvider>
          <div
            style={{
              position: 'relative',
              backgroundColor: '#fff',
              margin: 'auto'
            }}
          >
            <ContactModal />
            <ModalResponse />
            <Header />
            <Motto />
            <Services />
            <Partners />
            <WhereWeAre />
            <ProgrammingLanguages />
            <CallToActionSection />
            <BitwiseInfo />
            <Copyright />
          </div>
        </ContactModalResponseProvider>
      </ContactModalProvider>
    </LanguagesContextProvider>
  )
}

export default Home
