import React from "react";
import google1 from "../../images/login/google1.png";
import fb from "../../images/login/facebook.png";
import github1 from "../../images/login/github1.png";
import auth from "../../firebase.init";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement;
  if(loading || loading1 || loading2){
    return <Loading/>
  }
  if (error || error1 || error2) {
    errorElement =  <p className="text-danger">Error: {error?.message} {error1?.message} </p>
  }

  if (user || user1 || user2) {
    navigate("/home");
  }
  return (
    <div className="">
      <div className="d-flex align-items-center ">
        <div style={{ height: "1px" }} className="bg-primary w-50">
          {" "}
        </div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50">
          {" "}
        </div>
      
      </div>
      {errorElement}

      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={google1} alt="google" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button 
          onClick={() => signInWithFacebook()}
          className="btn btn-info w-50 d-block mx-auto my-2">
          <img style={{ width: "30px" }} src={fb} alt="google" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button
            onClick={() => signInWithGithub()}
         className="btn btn-info w-50 d-block mx-auto ">
          <img style={{ width: "30px" }} src={github1} alt="google" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
