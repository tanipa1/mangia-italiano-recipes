import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../assets/banner-1.jpg';
import banner2 from '../../../assets/banner-2.jpg';
import banner3 from '../../../assets/banner-3.jpg';
import banner4 from '../../../assets/banner-4.jpg';

const Banner = () => {
    return (
        <Container className='px-5 mt-5 banner'>
            <div className='banner d-md-flex gap-5 align-items-center'>
                <div className='me-5'>
                    <h2>Experience the true taste of <span className='italy'>Italy</span></h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dignissimos rerum, beatae nobis magni minus libero esse omnis molestias quasi ullam velit adipisci rem quia quo laboriosam saepe harum excepturi.</p>
                </div>
                <div className='ms-5'>
                    <Row xs={2} md={2} className="g-4">
                            <Col>
                                <Card className='banner-card'>
                                    <Card.Img variant="top" className='p-3' width={200} height={200} src={banner1} />
                                </Card>
                            </Col>
                            <Col>
                                <Card className='banner-card'>
                                    <Card.Img variant="top" className='p-3' width={200} height={200} src={banner2} />
                                </Card>
                            </Col>
                            <Col>
                                <Card className='banner-card'>
                                    <Card.Img variant="top" className='p-3' width={200} height={200} src={banner3} />
                                </Card>
                            </Col>
                            <Col>
                                <Card className='banner-card'>
                                    <Card.Img variant="top" className='p-3' width={200} height={200} src={banner4} />
                                </Card>
                            </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default Banner;