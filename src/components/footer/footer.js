import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='social-icons'>
                <a className="icon-link" href="https://github.com/davidfstein">
                    <FontAwesomeIcon className="social-icon" icon={faGithub} />
                </a>
                <a className="icon-link" href='https://www.linkedin.com/in/david-stein-035ba441/'>
                    <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                </a>
            </div>
        </footer>
    )
}