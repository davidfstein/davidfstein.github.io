import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import ContentButton from './components/contentButton/contentButton';
import Profile from './components/profile/profile';
import Footer from './components/footer/footer';
import './App.css';

function App() {
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
  );
}

export default App;
