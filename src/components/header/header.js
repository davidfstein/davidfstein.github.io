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
            header.style.backgroundColor = '#EAE7DC';
        }
    }

    swapHeaderClass = () => {
        const header = document.querySelector('.navbar');
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
                {   
                    this.state.atTop
                    ? 
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
                    :
                    <div>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2 navbar-dark" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
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
                        </Collapse>
                    </div>
                }
                <NavbarBrand href="/resume" className="ml-auto">David Stein</NavbarBrand>
            </Navbar>
        );
    }
}

export default Header;
