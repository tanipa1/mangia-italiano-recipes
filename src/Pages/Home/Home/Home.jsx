import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    const chefs = useLoaderData([]);

    return (
        <div>
            <div className='banner py-md-5 py-1'>
                <Banner></Banner>
            </div>

            {/* Chefs Card */}
            <Container className='px-5 mb-5'>
            <div className='mt-5'>
                <h2 className='text-center'>Meet Our Famous <span className='italy'>Chefs</span></h2>
                <div className='chef-card'>
                {
                    chefs.map(chef => <Chefs
                        key={chef.id}
                        chef={chef}
                    ></Chefs>)
                }
                </div>
            </div>
            </Container>

            {/*  */}
        </div>
    );
};

export default Home;