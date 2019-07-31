import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import Main from './components/main/main';
import Blog from './components/blog/blog';
import FullPost from './components/post/fullPost/fullPost';
import './App.css';

function App() {

  ReactGA.initialize('UA-143816139-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:postid" component={FullPost} />
      </Switch>
    </Router>
  );
}

export default App;
