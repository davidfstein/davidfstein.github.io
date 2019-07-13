import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './contentButton.css';

class ContentButton extends React.Component {

    getElementOffset = (element) => {
        const de = document.documentElement;
        const box = element.getBoundingClientRect();
        const top = box.top + window.pageYOffset - de.clientTop;
        const left = box.left + window.pageXOffset - de.clientLeft;
        return { top: top, left: left };
    }

    hideButton = () => {
        const button = document.querySelector('.content-chevron');
        const top = this.getElementOffset(button).top;
        if (window.scrollY > top - 100) {
            button.style.opacity = 0;
        }
    }

    showButton = () => {
        const button = document.querySelector('.content-chevron');
        if (window.scrollY <= 100) {
            button.style.opacity = 1;
        }
    }

    setScrollListeners = () => {
        window.addEventListener('scroll', this.hideButton);
        window.addEventListener('scroll', this.showButton);
    }

    removeScrollListeners = () => {
        window.removeEventListener('scroll', this.hideButton);
        window.removeEventListener('scroll', this.showButton);
    }

    toContent = () => {
        const about = document.querySelector('#experience');
        about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    componentDidMount() {
        this.setScrollListeners();
    } 
    
    componentWillUnmount() {
        this.removeScrollListeners();
    }

    render() {
        return (
            <div className='button-div'>
                <FontAwesomeIcon onClick={this.toContent} className='content-chevron' icon={faChevronDown} />
            </div>
        )
    }
}

export default ContentButton;