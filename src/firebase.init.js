
import {getAuth} from 'firebase/auth';

import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBU4M7UGevnsQAfUh0Wgvb2ZRFyo4fy5fo",
//   authDomain: "genius-car-service-hook-auth.firebaseapp.com",
//   projectId: "genius-car-service-hook-auth",
//   storageBucket: "genius-car-service-hook-auth.appspot.com",
//   messagingSenderId: "390832663317",
//   appId: "1:390832663317:web:d85c855e073ee70439971c"
// };




const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;