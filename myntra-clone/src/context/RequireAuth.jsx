import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const RequireAuth = ({children}) => {
    const {isAuth} = useContext(AuthContext)
    const {pathname} = useLocation();

    if(isAuth){
        return children
    }
    else{
        return (
            <Navigate 
                to='/login'
                state={{from:pathname}}
                replace/>
        )
    }
}

export default RequireAuth