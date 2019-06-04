import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Subtitle = ({ children }) => (
  <h4 className='subtitle'>
    {children}
  </h4>
);
Subtitle.defaultProps = {
  children: null,
};
Subtitle.propTypes = {
  children: PropTypes.node,
};

export default Subtitle;
