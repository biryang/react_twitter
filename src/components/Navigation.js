import React from 'react';
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';

const Navigation = props => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  
};

export default Navigation;