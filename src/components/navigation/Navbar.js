import React from 'react';
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks.js';
import SignedOutLinks from './SignedOutLinks.js';

const Navbar = props => {
  const check = localStorage.getItem('jwt');

  const logo = check ? (
    <Link to="/users" className="brand-logo">
      Krone
    </Link>
  ) : (
    <Link to="/signin" className="brand-logo">
      Krone
    </Link>
  );

  const links = check ? (
    <SignedInLinks signout={props.signout} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        {logo}
        {links}
      </div>
    </nav>
  );
};

export default Navbar;
