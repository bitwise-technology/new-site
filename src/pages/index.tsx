import React from 'react'
import BitwiseInfo from 'ui/components/BitwiseInfo'
import CallToActionSection from 'ui/components/CallToActionSection'
import Copyright from 'ui/components/Copyright'
import Header from 'ui/components/Header'
import Motto from 'ui/components/Motto'
import Partners from 'ui/components/Partners'
import Services from 'ui/components/Services'

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: '#F0F0F0',
        maxWidth: '1440px',
        margin: 'auto'
      }}
    >
      <Header />
      <Motto />
      <Services />
      <Partners />
      <CallToActionSection />
      <BitwiseInfo />
      <Copyright />
    </div>
  )
}

export default Home
