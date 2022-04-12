import React from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';

const VaiuNavBar = ({ user }) => {
    const logout = () => Meteor.logout();
    return (
        <Navbar color="dark" dark fixed={'true'} expand="md" >
            <NavbarBrand className='justify-content-center text-center'>
                <img src="https://app.vaiu.io/img/header-logo.png" alt="header-logo" className='img-fluid header-logo ' />
            </NavbarBrand>
            {user
                ? <NavbarText onClick={logout} className={"nav-user"} title="Log Out">
                    {user?.username}  <i className="fa-solid fa-right-to-bracket"></i>
                </NavbarText>
                : null
            }

        </Navbar>
    )
};

export default VaiuNavBar;