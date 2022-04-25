import React from 'react';
import sleeping from '../../../images/noFoundUrl/tiny-lazy.jpg'
const NotFound = () => {
    return (
        <div className='text-center'>
            <h3 className='text-primary'>No found url. Mechanic is sleeeping.</h3>
            <img className='w-50 h-auto' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;