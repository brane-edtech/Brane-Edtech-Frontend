import React from 'react'
import NavComponent from './NavComponent'
import HomeChild1 from './HomeChild1'
import Features from './Features'
import ParentsVoice from './ParentsVoice'
import Footer from './Footer'
import Ourproject from './Ourproject'
import LeadersVoice from './LeadersVoice'
import LanguagesComponent from './LanguagesComponent'
import NewsComponent from './NewsComponent'

const HomePage = () => {
  return (
    <>
        <NavComponent />
        <HomeChild1 />
        <Features />
        <Ourproject />
        <LeadersVoice />
        <ParentsVoice />
        <LanguagesComponent />
        <NewsComponent/>
        <Footer />
    </>
  )
}

export default HomePage