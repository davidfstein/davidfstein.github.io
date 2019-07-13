import React from 'react';
import { onMobile } from '../../utils/mobile-utils';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import './header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            atTop: true,
        };
    }

    toggleNavbar = () => {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }

    atTop = () => {
        this.setState({
            atTop: window.scrollY === 0,
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
        const el = onMobile() 
                    ? 
                    <Navbar>
                        <NavbarBrand href="/" className="mr-auto">David Stein</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className='navbar-light'/>
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar className='mobile-header'>
                                <NavItem>
                                    <NavLink href="/#experience">Experience</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/#education">Education</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/#skills">Skills</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/blog">Blog</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    : 
                    <Navbar>
                        <Nav navbar className='header flex-row'>
                            <NavItem>
                                <NavLink href="/#experience">Experience</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#education">Education</NavLink>
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
                    ;
        return (
            el
        );
    }
}

export default Header;
