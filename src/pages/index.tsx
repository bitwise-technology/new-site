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

const Home = () => {
  return (
    <LanguagesContextProvider>
      <ContactModalProvider>
        <div
          style={{
            position: 'relative',
            backgroundColor: '#F0F0F0',
            margin: 'auto'
          }}
        >
          <ContactModal />
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
      </ContactModalProvider>
    </LanguagesContextProvider>
  )
}

export default Home
