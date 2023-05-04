import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Footer></Footer>
        </div>
    );
};

export default Main;