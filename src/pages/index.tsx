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

const Home = () => {
  return (
    <ContactModalProvider>
      <div
        style={{
          position: 'relative',
          backgroundColor: '#F0F0F0',
          maxWidth: '1440px',
          margin: 'auto'
        }}
      >
        <ContactModal />
        <Header />
        <Motto />
        <Services />
        <Partners />
        <WhereWeAre />
        <CallToActionSection />
        <BitwiseInfo />
        <Copyright />
      </div>
    </ContactModalProvider>
  )
}

export default Home
