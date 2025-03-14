import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import AnalyticsFeature from './AnalyticsFeature/AnalyticsFeature'
import Feature from './Feature/Feature'
import Revivew from './Revivew/Revivew'
import Offer from './Offer/Offer'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <WhyChoose/>
      <AnalyticsFeature/>
      <Feature/>
      <Revivew/>
      <Offer/>
    </div>
  )
}

export default Home
