import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  changeHandler = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/api/login', this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/users');
      })
      .catch(error => console.log('Error'));
  };

  render() {
    if (localStorage.getItem('jwt')) {
      return <Redirect to="/users" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
              autoComplete="off"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandler}
              autoComplete="off"
            />
          </div>
          <button
            className="btn waves-effect waves-light btn-large"
            type="submit">
            Log In
            <i className="material-icons right" />
          </button>
        </form>
      </div>
    );
  }
}

export default Signin;
