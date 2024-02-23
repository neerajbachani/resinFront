import React from 'react'
import Achivement from '../Tables/Achivement'
import MonthlyOverview from '../Tables/MonthlyOverView'
import ProductsTable from './ProductsTable'
import CreateProductForm from './CreateProductForm'
// import WeeklyOverview from '../Tables/WeeklyOverview'

const Dashboard = () => {
  return (
    <>
     <Achivement/>
     {/* <WeeklyOverview/> */}
    <MonthlyOverview/>
    <ProductsTable/>
    
    </>
   
  )
}

export default Dashboard