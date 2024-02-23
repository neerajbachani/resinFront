
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

import Footer from './user/components/Footer/Footer'

// import Navbar from './user/components/Navbar/Navbar'
import Product from './user/components/Product/Product'
import ProductDetails from './user/components/ProductDetails/ProductDetails'
import HomePage from './user/pages/HomePage'
import productData from './user/productData'
import ProductPage from './user/pages/ProductPage'
import ProductDetailsPage from './user/pages/ProductDetailsPage'
import Cart from './user/components/Cart/Cart'
import CheckOut from './user/components/CheckOut.jsx/CheckOut'
import CartPage from './user/pages/CartPage'

import { MenuProvider } from './user/components/ContextProvider/MenuContext'

import AboutUsPage from './user/pages/AboutUsPage'
import LoginPage from './user/pages/LoginPage'
// import Dashboard from './Admin/pages/Dashboard'
// import Users from './Admin/pages/Users'
// import Orders from './Admin/pages/Orders'
// import AllProductsPage from './Admin/pages/AllProductsPage'
// import AddProductPage from './Admin/pages/AddProductPage'
// import HeroSectionManagerPage from './Admin/pages/HeroSectionManagerPage'
// import NotificationPage from './Admin/pages/NotificationPage'
import SignUpPage from './user/pages/SignUpPage'
import ContactUsPage from './user/pages/ContactUsPage'
import AdminRouters from './AdminRouters/AdminRouters'
import CustomerRoutes from './AdminRouters/CustomerRoutes'
import AdminLogin from './user/components/Form/AdminLogin'
import  PrivateRoute  from './AdminRouters/PrivateRoute'
import { api } from './Config/ApiConfig'

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Set initial isAdmin state

  const handleAdminLogin = async (email, password) => {
      try {
          const response = await api.post('/auth/admin/login', { email, password });
          // Assuming successful login, set isAdmin to true
          setIsAdmin(true);
      } catch (err) {
          console.error('Admin login failed:', err);
          // Handle login failure
      }
  };

  return (
    <MenuProvider>
        <Routes>
          {/* Pass handleAdminLogin function as a prop to AdminLogin component */}
          <Route path="/admin/login" element={<AdminLogin handleAdminLogin={handleAdminLogin} />} />
          {/* Use isAdmin state to conditionally render AdminRouters */}
          {/* <PrivateRoute path="/admin/*" element={<AdminRouters />} isAdmin={isAdmin} /> */}
          <Route path="/admin/*" element={<PrivateRoute isAdmin={isAdmin}/>} />
          <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </MenuProvider>
      
  );
}

export default App;
