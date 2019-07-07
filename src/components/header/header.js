import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './header.css';

class Header extends React.Component {

    removeHeaderClassAtTop = () => {
        if (window.scrollY === 0) {
            const header = document.querySelector('.navbar');
            header.style.backgroundColor = '#EAE7DC';
        }
    }

    swapHeaderClass = () => {
        const header = document.querySelector('.navbar');
        header.style.backgroundColor = '#D8C3A5';
    }

    setScrollListeners = () => {
        window.addEventListener('scroll', this.swapHeaderClass);
        window.addEventListener('scroll', this.removeHeaderClassAtTop);
    }

    removeScrollListeners = () => {
        window.removeEventListener('scroll', this.swapHeaderClass);
        window.removeEventListener('scroll', this.removeHeaderClassAtTop);
    }

    componentDidMount() {
        this.setScrollListeners();
    } 
    
    componentWillUnmount() {
        this.removeScrollListeners();
    }

    render() {
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
}

export default Header;
