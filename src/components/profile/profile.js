import React from 'react';
import profPic from '../../assets/photo.png';
import './profile.css';

export default function Profile() {
    return (
        <div className='container'>
            {/* <img className="profile-pic" alt="Profile" src={profPic}/> */}
            <div id='above-the-fold'>
                <div id='above-content'>
                    <h1 className="welcome">Welcome</h1>
                    <p>Taxidermy typewriter man bun, shabby chic gentrify nulla la croix ad pop-up. 
                        Helvetica narwhal humblebrag excepteur. Chia godard excepteur cred eu VHS 
                        cardigan cornhole ipsum palo santo qui labore 90's vaporware heirloom. 
                        Adipisicing pinterest lorem glossier lyft pour-over mollit nisi hoodie 
                        everyday carry raw denim incididunt sriracha fingerstache. YOLO pug locavore, 
                        fam yuccie magna palo santo ut enim cred irony next level ugh live-edge ennui. 
                        Duis tumblr pok pok distillery, in vegan flexitarian portland semiotics butcher et.</p>
                </div>
            </div>
            {/* <div id='image-placeholder'></div> */}
        </div>
    )
}