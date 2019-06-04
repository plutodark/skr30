import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children }) => (
  <p>
    {children}
  </p>
);
Paragraph.defaultProps = {
  children: null,
};
Paragraph.propTypes = {
  children: PropTypes.node,
};

export default Paragraph;
