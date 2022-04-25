import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    // if(user){
    //     console.log(user)
    // }
    // const [user, setUser] = useState({
    //     name: 'Anamul',
    //     email: 'anamul@gmail.com',
    //     address: 'Dhanmondi 32',
    //     phone: '01721969798'
    // })

    // const handleAddressChange = event =>{
    //     console.log(event.target.value)
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     console.log(newUser)
    //     setUser(newUser)
    // }

    const handlePlaceOrder = event =>{
        console.log("clicked")
        event.preventDefault();
        const order = {
            email: user.email,
            service : service.name,
            serviceId : serviceId,
            address : event.target.address.value,
            phone: event.target.phone.value
        }
         axios.post('http://localhost:5000/order',order)
          .then(response => {
              console.log(response)
              const {data} = response;
              if(data.insertedId){
                  toast('Your Order is Booked!!');
                  event.target.reset();
              }
          })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-3 text-center' type="text" value={user.displayName} name='name' placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-3 text-center' type="text" value={user.email} name='email' placeholder='email' required readOnly disabled/>
                <br />
                <input className='w-100 mb-3 text-center' type="text" value={service.name}  name='service' placeholder='service' required readOnly/>
                <br />
                <input className='w-100 mb-3 text-center' type="text"  value={user.address} name='address' placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-3 text-center' type="text"  name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;