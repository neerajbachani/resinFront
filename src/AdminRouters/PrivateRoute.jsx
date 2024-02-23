import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminRouters from './AdminRouters';
import Admin from '../Admin/Components/Admin';

const PrivateRoute = ({ isAdmin }) => {
    

    return (
        <>
            <Routes>
                {isAdmin && <Route path='/*' element={<Admin/>} />}
            </Routes>
        </>
    );
};

export default PrivateRoute;

