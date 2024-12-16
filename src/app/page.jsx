import React from 'react'
import Header from './components/header/header'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import Footer from './components/footer/footer'
export const metadata = {
  title : "About me"
}

const Home = () => {
  return (
    <section>
      <Header/>
      <Section1/>
      <Section2/>
      <Footer/>
    </section>
  )
}

export default Home