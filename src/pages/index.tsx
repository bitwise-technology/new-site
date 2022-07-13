import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Footer } from '../ui/components_2/Footer'
import { Header } from '../ui/components_2/Header'
import { Landing } from '../ui/components_2/Landing'
import { SectionFive } from '../ui/components_2/SectionFive'
import { SectionFour } from '../ui/components_2/SectionFour'
import { SectionOne } from '../ui/components_2/SectionOne'
import { SectionThree } from '../ui/components_2/SectionThree'
import { SectionTwo } from '../ui/components_2/SectionTwo'

const TwoSection = styled.div`
  @media (max-width: 1150px) {
    display: none !important;
  }
  background-color: #000;
  height: 1304px;
`

const Image = styled.div`
  @media (max-width: 1150px) {
    display: none !important;
  }
  height: 100%;
  background: url('/img/NewYork.svg');
  width: 100%;
  object-fit: contain;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  /* @media (max-width: 1150px) {
    display: none !important;
  } */
  /* position: relative; */
  background-color: #fff;
  margin: auto;
  width: 100%;
`

const Home = () => {
  return (
    <Container>
      <Header />
      <Landing />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <TwoSection>
        <Image>
          <SectionFour />
          <SectionFive />
        </Image>
      </TwoSection>
      <Footer />
    </Container>
    // <LanguagesContextProvider>
    //   <ContactModalProvider>
    //     <ContactModalResponseProvider>
    //       <div
    //         style={{
    //           position: 'relative',
    //           backgroundColor: '#fff',
    //           margin: 'auto'
    //         }}
    //       >
    //         <ContactModal />
    //         <ModalResponse />
    //         <Section1 />
    //         <Services />
    //         <Partners />
    //         <WhereWeAre />
    //         <ProgrammingLanguages />
    //         <CallToActionSection />
    //         <BitwiseInfo />
    //         <Copyright />
    //       </div>
    //     </ContactModalResponseProvider>
    //   </ContactModalProvider>
    // </LanguagesContextProvider>
  )
}

export default Home
