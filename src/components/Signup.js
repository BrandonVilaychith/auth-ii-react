import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      department: ''
    };
  }

  changeHandler = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/api/register', this.state)
      .then(res => {
        this.props.history.push('/signin');
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
          <div className="input-field">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              name="department"
              value={this.state.department}
              onChange={this.changeHandler}
              autoComplete="off"
            />
          </div>
          <button
            className="btn waves-effect waves-light btn-large"
            type="submit">
            Sign Up
            <i className="material-icons right" />
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
