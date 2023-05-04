import React, { useContext, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';



const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);
        if(password.length < 6){
            setError('Password must be Atleast 6 charaters')
        }

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error =>{
            setError(error.message);
        })

        updateUserProfile(name, photo)
        .then(() => {
        })
        .catch(error => {
          setError(error.message);
        });
    }

    return (
        <div className='sub-banner py-5'>
            <Container className='w-50 mt-5 px-5 py-5 rounded bg-white '>
                <h2 className='text-center mb-4'>Register Here</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="url" name='photo' placeholder="Enter Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required/>
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
                        
                    </Form.Text><br />
                    {
                    error? <Alert variant='danger'>
                        {error}
                    </Alert>: <></>
                    }
                </Form>
                
            </Container>
            <br /><br /><hr />
        </div>
    );
};

export default Register;