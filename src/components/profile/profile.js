import React from 'react';
import profPic from '../../assets/photo.png';
import './profile.css';

export default function Profile() {
    return (
        <div className='container'>
            {/* <img className="profile-pic" alt="Profile" src={profPic}/> */}
            <h1 className="Welcome">Welcome</h1>
            <div id='image-placeholder'></div>
        </div>
    )
}