import React from 'react'
import Banner from './Banner'
import AdvanceFeature from './AdvanceFeature'
import HowMemory from './HowMemory'
import UserReflection from './UserReflection'
import { Star } from 'lucide-react'
import StartPreserving from './StartPreserving'
import Pricing from './Pricing'
import FaQuestion from './FaQuestion'
import GetInTouch from './GetInTouch'



const Home = () => {
  return (
    <div className='bg-gradient-to-r  from-[#BA927C] to-[#738F9B] '> 
        <div className=''>
           <Banner/>
         <AdvanceFeature/>
         <HowMemory/>
         <UserReflection/>
         <StartPreserving/>
         <Pricing/>
         <FaQuestion/>
         <GetInTouch/>
        </div>
        
    </div>
  )
}

export default Home
