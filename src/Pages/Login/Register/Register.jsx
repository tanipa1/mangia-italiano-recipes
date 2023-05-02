import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='sub-banner py-5'>
            <Container className='w-50 mt-5 px-5 py-5 rounded bg-white '>
                <h2 className='text-center mb-4'>Register Here</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Button className='w-100 py-1 login mt-4' variant="secondary" size="lg" type="submit">
                            Register
                        </Button>
                    </Form.Group>
                    <Form.Text className="">
                        Already Have An Account ? <Link className='text-primary' to="/login">Login</Link>
                    </Form.Text><br /><br />
                    <Form.Text className="text-success">
                        We'll never share your email with anyone else.
                    </Form.Text><br />
                    <Form.Text className="text-danger">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form>
                
            </Container>
            <br /><br /><hr />
        </div>
    );
};

export default Register;