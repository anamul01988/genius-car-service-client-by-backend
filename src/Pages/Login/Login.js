// import { Button } from "bootstrap";
import React, { useRef } from "react";
import { Form, Button} from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin";

// import { ToastContainer, toast } from 'react-toastify';
import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../Shared/PageTitle/PageTitle";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail( auth );
    if(loading ||sending ){
      return <Loading/>
    }
  
    if(user){
      navigate(from, {replace: true});
    }

    let errorElement;
  if (error ) {
    errorElement =   <p className="text-danger">Error: {error?.message}  </p>
  }


    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event =>{
        navigate('/register')
    }
    const resetPassword = async()=>{
      const email = emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }
      else{
        toast('please enter your email address.')
      }
    }
  return (
    <div className="container w-50 mx-auto">
      <PageTitle title = "Login"/>
      <h3 className="text-primary text-center mt-3">please login.</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary w-50 mx-auto d-block mb-3" class type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New to Genius Car <Link to='/register' className="text-primary pointer-cursor pe-auto text-decoration-none" onClick={navigateRegister}>Please Register</Link></p>
      <p>Forget Password? <Button className=" btn btn-link text-light pointer-cursor pe-auto text-decoration-none" onClick={resetPassword}>Reset Password</Button></p>
      <SocialLogin/>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Login;
