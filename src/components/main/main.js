import React from 'react';
import Header from '../header/header';
import ContentButton from '../contentButton/contentButton'
import Footer from '../footer/footer';
import Profile from '../profile/profile';
import About from '../about/about';

function Main() {
    return (
        <div>
            <Header />
            <ContentButton />
            <div id='wrapper'>
                <Profile />
                <About />
            </div>
            <Footer />
        </div>
    )
}

export default Main;