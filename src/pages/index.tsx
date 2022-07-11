import React from 'react'
import { Header } from '../ui/components_2/Header'
import { Landing } from '../ui/components_2/Landing'
import { SectionFive } from '../ui/components_2/SectionFive'
import { SectionFour } from '../ui/components_2/SectionFour'
import { SectionOne } from '../ui/components_2/SectionOne'
import { SectionThree } from '../ui/components_2/SectionThree'
import { SectionTwo } from '../ui/components_2/SectionTwo'

// const Item: React.FC<{ color: string }> = ({ color }) => (
//   <div
//     style={{
//       height: '100vh',
//       backgroundColor: color
//     }}
//   ></div>
// )
const Home = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#fff',
        margin: 'auto'
      }}
    >
      <Header />
      <Landing />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <div style={{ backgroundColor: '#000' }}>
        <div
          style={{
            height: '200vh',
            background: 'url(/img/NewYork.svg)',
            width: '100%',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <SectionFour />
          <SectionFive />
        </div>
      </div>
      {/* <Item color="blue" /> */}
    </div>
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
