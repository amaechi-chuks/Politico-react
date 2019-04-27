import React from 'react';
import PropTypes from 'prop-types';

const NavList = props => {
  return (
    <React.Fragment>
      <li className="navbar-link" key={props.name}>
        {props.children}
      </li>
    </React.Fragment>
  );
};
NavList.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default NavList;
