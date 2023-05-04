import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <Button className='login' variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        /><span className=""> Loading...</span>
        </Button>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;