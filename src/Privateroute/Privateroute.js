import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading ){
        return <><progress className="progress w-56"></progress></>
    }
    if (user && user.uid){
        return children;
    }
    return (
        <Navigate to={'/login'}/>
    );
};

export default Privateroute;