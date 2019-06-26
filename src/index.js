import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import redirect from './redirect';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
    <Router>
      <div>
        <Route path="/" component={redirect} />
        <Route path="/resume" component={App} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
