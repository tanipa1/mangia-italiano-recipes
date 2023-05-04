import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import error from '../../assets/2456051.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const imgStyle = {
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto'
    };

    return (
        <Container className='px-5 py-5'>
            <Row>
                <Col className='d-flex align-items-center'>
                    <Image className='' src={error} alt="404 - Page Not Found" style={imgStyle} />
                    <div>
                        <h1 className="text-center mt-4">Page Not Found</h1>
                        <Link to="/"><Button className='login mt-4'>Go to Home</Button></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;
