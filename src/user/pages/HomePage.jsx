import React from 'react'
import { useState } from 'react'
import AboutUs from '../components/Aboutus/AboutUs'
import DeptAndSearch from '../components/DepartmentAndSearch/DeptAndSearch'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import HeroSection from '../components/HeroSection/HeroSection'
import TrendingProducts from '../components/TrendingProducts/TrendingProducts'
import { useMenu } from '../components/ContextProvider/MenuContext'
import heroSection from '../../assets/herosection.jpeg'
import heroSection1 from '../../assets/TrendingProductsPoojaThali.jpeg'
import heroSection2 from '../../assets/TrendingProductsChains.jpg'




const HomePage = () => {
  const { isOpen } = useMenu();


  return (
    <>
    <div className=' max-w-screen-xl mx-auto ' >
    <DeptAndSearch />
    
        <HeroSection isOpen={isOpen}  />
      <TrendingProducts/>
      <FeaturedProducts/>
      <AboutUs/>
       
    </div>
   
    </>
  )
}

export default HomePage