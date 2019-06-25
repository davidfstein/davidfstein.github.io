import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './header.css';

function Header() {
    return (
        <Navbar>
            <Nav navbar className='flex-row'>
                <NavItem>
                    <NavLink href="/resume#about">About Me</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/resume#experience">Experience</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/resume">Skills</NavLink>
                </NavItem>
            </Nav>
            <NavbarBrand href="/resume" className="ml-auto">David Stein</NavbarBrand>
        </Navbar>
    );
}

export default Header;
