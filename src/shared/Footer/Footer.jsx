import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer py-5">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <h5 className=" mb-4">Mangia Italiano</h5>
                            <p className="text-muted mb-4">Discover the best Italian recipes from top chefs around the world. Join our community and explore a world of delicious cuisine.</p>
                        </Col>
                        <Col lg={2}>
                            <h5 className=" mb-4">Recipes</h5>
                            <Nav className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="text-muted" href="#">Pasta</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-muted" href="#">Pizza</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-muted" href="#">Seafood</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-muted" href="#">Desserts</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col lg={2}>
                            <h5 className="mb-4">About Us</h5>
                            <Nav className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="text-muted" href="#">Our Story</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-muted" href="#">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-muted" href="#">Testimonials</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col lg={4}>
                            <h5 className="mb-4">Contact Us</h5>
                            <p className="text-muted mb-4">Have a question or comment?</p>
                            <form>
                                <div className="mb-1">
                                    <label htmlFor="emailInput" className="form-label text-muted">Email address</label>
                                    <input type="email" className="form-control" id="emailInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="messageInput" className="form-label text-muted">Message</label>
                                    <textarea className="form-control" id="messageInput" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-light">Submit</button>
                            </form>
                        </Col>
                    </Row>
                </Container>
                <div className="text-center py-3">
                    <Container>
                        <p className="text-muted mb-0">&copy; 2023 Mangia Italiano. All Rights Reserved.</p>
                    </Container>
                </div>
            </footer>
        </div>
    );
};

export default Footer;