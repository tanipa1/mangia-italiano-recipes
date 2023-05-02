import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData([]);
    console.log(chefs);
    return (
        <div>
            <div className='banner py-md-5 py-1'>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;