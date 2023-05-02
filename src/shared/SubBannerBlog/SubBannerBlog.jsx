import React from 'react';
import pasta from "../../assets/pasta.webp";
import { Container } from 'react-bootstrap';
import './SubBannerBlog.css';

const SubBanner = () => {
    return (
        <div className='sub-banner py-5'>
            <Container className='d-flex align-items-center justify-content-center gap-4 mt-3'>
                <img width={100} src={pasta} alt="" />
                <h2>Blogs Here</h2>
                <div></div>
            </Container>
        </div>
    );
};

export default SubBanner;