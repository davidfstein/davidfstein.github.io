import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import './App.css';

function App() {
  return (
    <div id='wrapper'>
      <Header />
      <div id='image-placeholder'></div>
      <About />
    </div>
  );
}

export default App;
