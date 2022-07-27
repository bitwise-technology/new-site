import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import { Footer } from '../ui/components_2/Footer'
import { Header } from '../ui/components_2/Header'
import { Landing } from '../ui/components_2/Landing'
import { SectionFive } from '../ui/components_2/SectionFive'
import { SectionFour } from '../ui/components_2/SectionFour'
import { SectionOne } from '../ui/components_2/SectionOne'
import { SectionThree } from '../ui/components_2/SectionThree'
import { SectionTwo } from '../ui/components_2/SectionTwo'
import 'aos/dist/aos.css'
import LanguagesContextProvider from '../contexts/LanguagesContext'

const TwoSection = styled.div`
  /* background-color: #160c15; */
  /* height: 1304px; */
  @media screen and (min-width: 530px) {
    background: url('/img/NYcity.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    /* background-color: red; */
  }
`

const Container = styled.div`
  min-height: 1000px;
  background-color: #fff;
`

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 500
    })
  }, [])
  return (
    <LanguagesContextProvider>
      <Container>
        <Header />
        <Landing />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <div style={{ background: '#160C15' }}>
          <TwoSection>
            <SectionFour />
            <SectionFive />
          </TwoSection>
        </div>
        <Footer />
      </Container>
    </LanguagesContextProvider>
  )
}

export default Home
