import React from 'react'
import { Redirect, Route } from 'react-router';
/**
 * Read aboud Private, Public and Protected
 * https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e
 *  
 */
const PrivateRoute = ({ component: Component, ...rest }) => {

    return (<Route {...rest} component={(props) => {
        const token = window.localStorage.getItem('token');
        if (token) {
            return <Component {...props} />
        } else {
            return <Redirect to={`/signin`} />
        }
    }} />)

}

export default PrivateRoute;