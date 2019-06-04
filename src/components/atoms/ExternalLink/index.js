import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ children, href }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </a>
);

ExternalLink.defaultProps = {
  href: '',
  children: null,
};
ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default ExternalLink;
