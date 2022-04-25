import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ManageServices from './Pages/ManageServices/ManageServices';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/serviceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={
       
             <Home></Home>
   
        }></Route>
        <Route path="/home" element={
     
               <Home></Home>
      
        }></Route>
    
        <Route path="/service/:serviceId" element={<ServiceDetail/>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/checkout/:serviceId" element={
           <RequireAuth>
               <Checkout/>
           </RequireAuth>
        }> </Route>
        <Route path="/addservice" element={
           <RequireAuth>
               <AddService/>
           </RequireAuth>
        }> </Route>
        <Route path="/manage" element={
           <RequireAuth>
               <ManageServices/>
           </RequireAuth>
        }> </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
