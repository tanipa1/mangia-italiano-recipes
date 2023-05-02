import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='banner py-5'>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;