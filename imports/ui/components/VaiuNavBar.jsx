import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const VaiuNavBar = () => (
    <Navbar color="dark" dark fixed={'true'} expand="md" >
        <NavbarBrand className='justify-content-center text-center'>
            <img src="https://app.vaiu.io/img/header-logo.png" alt="header-logo" className='img-fluid header-logo ' />
        </NavbarBrand>
    </Navbar>
);

export default VaiuNavBar;