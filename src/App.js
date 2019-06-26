import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import ContactButton from './components/contentButton/contentButton';
import './App.css';

function App() {
  return (
    <div id='wrapper'>
      <Header />
      <ContactButton />
      <div id='image-placeholder'></div>
      <About />
    </div>
  );
}

export default App;
