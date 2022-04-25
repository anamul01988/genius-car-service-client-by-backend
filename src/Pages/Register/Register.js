import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin';
import Loading from '../Shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = ()=> {
        navigate('/login');
    }

    if(loading ||updating ){
        return <Loading/>
      }

    if(user){
        // navigate('/home');
        console.log('user', user)
    }

    const handleRegister = async(event )=> {
        event.preventDefault();
        // console.log(event.target.email.value)
        console.log(event.target.password.value)
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        // if(agree){
        //     createUserWithEmailAndPassword( email, password);
        // }
      await createUserWithEmailAndPassword( email, password);  //next line a jawer age porjonto wait korbo
      await updateProfile({ displayName: name });
      console.log('Updated profile');
      navigate('/home');
       
    }
    return (
        <div className='register-form'>
            <h3 style={{textAlign: 'center'}}>Plese register. </h3>
            <form onSubmit={handleRegister} action="">
                <input type="text" name='name' id='' placeholder='your name' />
         
                <input type="email" name='email' id='' placeholder='email address' required />
            
                <input type="password" name='password' id='' placeholder='password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? ' ps-2 text-primary' : ' ps-2 text-danger'} htmlFor="terms">Accept terms & condition</label> */}
                <label className={`ps-2 ${agree? '': 'text-danger'}`} htmlFor="terms">Accept terms & condition</label>
                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type="submit" value='Register' />
            </form>
            <p>Already have an account <Link to='/login' className="text-primary pointer-cursor pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin/>

        </div>
    );
};

export default Register;