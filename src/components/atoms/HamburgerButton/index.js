import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const HamburgerButton = (props) => {
  const {
    isActive,
    onClick,
    isHome,
    isTop,
  } = props;
  return (
    <button
      className={`hamburger hamburger--emphatic ${isActive ? 'is-active' : ''} ${isHome && isTop ? 'white' : ''}`}
      type='button'
      onClick={onClick}
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner' />
      </span>
    </button>
  );
};
HamburgerButton.defaultProps = {
  isActive: false,
  onClick: () => {},
  isHome: false,
  isTop: false,
};
HamburgerButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  isHome: PropTypes.bool,
  isTop: PropTypes.bool,
};
export default HamburgerButton;
