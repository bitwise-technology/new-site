import React from 'react'
import Header from 'ui/components/Header'
import Motto from 'ui/components/Motto'

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: '#F0F0F0',
        height: '100vh',
        maxWidth: '1440px',
        margin: 'auto'
      }}
    >
      <Header />
      <Motto />
    </div>
  )
}

export default Home
