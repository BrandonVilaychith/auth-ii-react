import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';

import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Users from './components/Users.js';
import Navbar from './components/navigation/Navbar.js';

class App extends Component {
  signout = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
      // this.props.history.push('/signin');
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar signout={this.signout} />
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
