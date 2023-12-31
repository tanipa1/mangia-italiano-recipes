import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Navbar bg="white" expand="lg">
            <Container className='mx-auto px-5'>
                <Navbar.Brand className='d-flex align-items-center gap-2' href="#home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#85b72c" d="M4 16.5V8H3V7h1V6H3V5h1V4H3V3h6c.5.03.95.24 1.34.63s.61.87.66 1.37h10v1H11c-.05.53-.27 1-.66 1.43S9.5 8.05 9 8H7v7.05c.05 0 .13-.01.24-.05s.2 0 .26 0c.56 0 1.2.14 1.92.42c.41-.92 1.11-1.74 2.11-2.42s2-1 3-1c1.53 0 2.83.53 3.89 1.59S20 15.95 20 17.5v.27c0 .13-.03.2-.03.23H3.14c.13-.5.41-1 .86-1.5m2-1.27V8H5v7.7c.5-.25.81-.4 1-.47M9 7V6H7v1h2m0-3H7v1h2V4M5 4v1h1V4H5m0 2v1h1V6H5M2 19h20l-2 2H4l-2-2Z" /></svg>
                    <div>
                        <h4 className='m-0'>Mangia<i>Italiano</i></h4>
                        <p className='motto m-0 p-0'><small><i>Taste of Italy in every recipe</i></small></p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <ActiveLink className='text-decoration-none text-black me-4' to="/">Home</ActiveLink>
                        <ActiveLink className='text-decoration-none text-black me-4' to="/blog">Blog</ActiveLink>
                    </Nav>
                    <Nav className="">
                        {
                            user && <img width={40} data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName} class="rounded-circle me-2" src={user.photoURL} alt="" />
                        }
                        {!user ?
                            <Link className='text-decoration-none text-black me-4' to="/login">
                                <Button className='login'>Login</Button>
                            </Link> :
                            <>
                                <Button className='login' onClick={handleSignOut}>Logout</Button>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;