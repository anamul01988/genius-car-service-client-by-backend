import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    // console.log('inside require auth',user)
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if(loading){
        return <Loading/>
    }
    if(!user){
        return <Navigate to='/login' state = {{from: location}} replace/>
    }

    // console.log(user)

    if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
        return  <div className='container'>
            
                <h3 className='text-danger'>Your email is not verified!!</h3>
            <h5 className='text-danger'>Please Verify your email address.</h5>
            <button
            className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
        //   alert('Sent email');
          toast('Sent email');
        }}
      >
        Verify email again
      </button>
      <ToastContainer/>
            
        </div>
    }
    return children;
};

export default RequireAuth;