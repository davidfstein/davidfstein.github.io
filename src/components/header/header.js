import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import './header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            atTop: true
        };
    }

    atTop = () => {
        this.setState({
            atTop: window.scrollY === 0,
        });
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    removeHeaderClassAtTop = () => {
        if (this.state.atTop) {
            const header = document.querySelector('.navbar');
            // header.style.height = '5rem';
            header.style.backgroundColor = '#EAE7DC';
        }
    }

    swapHeaderClass = () => {
        const header = document.querySelector('.navbar');
        // header.style.height = '3rem';
        header.style.backgroundColor = '#D8C3A5';
    }

    setScrollListeners = () => {
        window.addEventListener('scroll', this.swapHeaderClass);
        window.addEventListener('scroll', this.atTop);
        window.addEventListener('scroll', this.removeHeaderClassAtTop);
    }

    removeScrollListeners = () => {
        window.removeEventListener('scroll', this.swapHeaderClass);
        window.removeEventListener('scroll', this.atTop);
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
                        <NavLink href="/#experience">Experience</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#skills">Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/blog">Blog</NavLink>
                    </NavItem>
                </Nav>
                <NavbarBrand href="/" className="ml-auto">David Stein</NavbarBrand>
            </Navbar>
        );
    }
}

export default Header;
