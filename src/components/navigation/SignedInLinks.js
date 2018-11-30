import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/users">Home</NavLink>
      </li>
      <li>
        <NavLink to="/signin" onClick={props.signout}>
          Log Out
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
