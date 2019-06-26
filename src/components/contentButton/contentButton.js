import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './contentButton.css';

class ContentButton extends React.Component {

    toContent = () => {
        const about = document.querySelector('#about');
        about.scrollIntoView({ behavior: 'smooth', block: 'start' });
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