import React, { useContext, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess(loggedUser);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInGoogle = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInGitHub = () =>{
        gitHubSignIn()
        .then(result => {
            const gitHubUser = result.user;
            console.log(gitHubUser);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    return (
        <div className='sub-banner py-5'>
            <Container className='w-50 mt-5 px-5 py-5 rounded bg-white '>
                <h2 className='text-center mb-4'>Login Your Account</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group>
                        <Button className='w-100 py-1 login mt-4' variant="secondary" size="lg" type="submit">
                            Login
                        </Button>
                    </Form.Group>
                    <Form.Text className="">
                        Dont’t Have An Account ? <Link className='text-danger' to="/register">Register</Link>
                    </Form.Text>
                    <p className='text-center my-2 text-secondary'>or</p>
                    <Form.Group>
                        <Button onClick={signInGoogle} className='w-100 py-1 mt-2' variant="outline-primary" size="lg" type="submit">
                            <svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" /><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" /></svg>
                            Sign in with Google
                        </Button>
                    </Form.Group>
                    <Form.Group>
                        <Button onClick={signInGitHub} className='w-100 py-1 mt-2' variant="outline-secondary" size="lg" type="submit">
                            <svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z" clip-rule="evenodd" /></svg>
                            Sign in with Github
                        </Button>
                    </Form.Group>
                    <br />
                    <br /> <br />
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

export default Login;