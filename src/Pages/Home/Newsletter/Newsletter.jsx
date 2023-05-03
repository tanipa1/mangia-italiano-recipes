import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <h2 className='text-center'>Subscribe to My Newsletter</h2>
            <p className='text-center'>Get access to my latest recipes by joining the weekly newsletter</p>
            <div className='d-md-flex gap-2 justify-content-center px-5'>
                <input placeholder='Enter Your Email Addres' type="email" className="form-control w-50" />
                <button type="submit" className="btn btn-outline-light login">Submit</button>
            </div>
        </div>
    );
};

export default Newsletter;