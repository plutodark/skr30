import React from 'react';
import PropTypes from 'prop-types';

const Smalltitle = ({ children }) => (
  <h5>
    {children}
  </h5>
);
Smalltitle.defaultProps = {
  children: null,
};
Smalltitle.propTypes = {
  children: PropTypes.node,
};

export default Smalltitle;
