import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Admin/Components/Admin'
// import AdminLogin from '../user/components/Form/AdminLogin'

const AdminRouters = () => {
  
  return (
    <>
   
        <Route path='/*' element={<Admin/>}></Route>
    
    </>
  )
}

export default AdminRouters