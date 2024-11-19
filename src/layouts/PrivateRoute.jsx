import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex)
    const location = useLocation()

    if(loading){
        return <div className='flex items-center justify-center'> <span className="loading loading-spinner loading-lg mt-32"></span> </div>
    }

    if(user){
        return children
    }
    return (
        <Navigate state={location.pathname} to="/auth/login"></Navigate>
    );
};

export default PrivateRoute;