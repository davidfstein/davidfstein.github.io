import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import Main from './components/main/main';
import Blog from './components/blog/blog';
import './App.css';

function App() {

  ReactGA.initialize('UA-143816139-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/blog" component={Blog} />
    </Router>
  );
}

export default App;
