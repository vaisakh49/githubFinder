import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import Notfound from './components/pages/Notfound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert alert1={alert} />
              <Switch>
                {' '}
                <Route path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/users/:login' component={User} />
                {/* <Route component={Notfound} /> */}
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
