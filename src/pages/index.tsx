import React from 'react'
import Header from 'ui/components/Header'
import Motto from 'ui/components/Motto'
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
    </div>
  )
}

export default Home
