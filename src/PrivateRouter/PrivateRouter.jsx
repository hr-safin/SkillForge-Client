import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const {user} = useContext(AuthContext)
    const location = useLocation()
    

    if(user?.email){
         return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;