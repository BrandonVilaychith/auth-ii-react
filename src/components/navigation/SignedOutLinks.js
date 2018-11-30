/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedoutLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signin">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Register</NavLink>
      </li>
    </ul>
  );
};

export default SignedoutLinks;
