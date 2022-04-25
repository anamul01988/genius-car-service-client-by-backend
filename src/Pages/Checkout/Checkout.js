import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user, setUser] = useState({
        name: 'Anamul',
        email: 'anamul@gmail.com',
        address: 'Dhanmondi 32',
        phone: '01721969798'
    })

    const handleAddressChange = event =>{
        console.log(event.target.value)
        const {address, ...rest} = user;
        const newAddress = event.target.value;
        const newUser = {address: newAddress, ...rest};
        console.log(newUser)
        setUser(newUser)
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form action="">
                <input className='w-100 mb-3 text-center' type="text" value={user.name} name='name' placeholder='name' required />
                <br />
                <input className='w-100 mb-3 text-center' type="text" value={user.email} name='email' placeholder='email' required />
                <br />
                <input className='w-100 mb-3 text-center' type="text" value={service.name} name='service' placeholder='service' required />
                <br />
                <input className='w-100 mb-3 text-center' type="text" onChange={handleAddressChange} value={user.address} name='address' placeholder='address' required />
                <br />
                <input className='w-100 mb-3 text-center' type="text" value={user.phone} name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="text" value="Submit" />
            </form>
        </div>
    );
};

export default Checkout;