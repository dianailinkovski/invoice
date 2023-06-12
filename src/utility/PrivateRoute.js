import React, {useEffect} from 'react'
import { Navigate, Route} from 'react-router-dom';

import { getLocalStorage } from './helper';
const PrivateRoute = (Component) => {
    const checkAuth = getLocalStorage().CNF;
console.log(checkAuth);
    return (
        checkAuth ? (
            <Component/>
        ) : (
            <Navigate to ="/" />
        )
    )
}
export default PrivateRoute;