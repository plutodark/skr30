import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
// import HamburgerButton from '../../atoms/HamburgerButton';
import withLocale from '../../hoc/withLocale';
import Logo from '../../atoms/Logo';
import './style.scss';

const HomeHeader = (props) => {
  const {
    locale,
    // isMenuOpen,
    handleEvent,
  } = props;
  const [isTop, setIsTop] = useState(true);
  const handleScroll = () => {
    const lastScrollY = window.scrollY;
    if (lastScrollY < 10) {
      window.requestAnimationFrame(() => setIsTop(true));
    } else {
      window.requestAnimationFrame(() => setIsTop(false));
    }
  };
  const mount = () => {
    window.addEventListener('scroll', handleScroll);
  };
  const unmount = () => {
    window.removeEventListener('scroll', handleScroll);
  };
  useEffect(() => {
    mount();
    return unmount;
  }, []);
  const renderMenuButton = () => {
    const text = () => {
      switch (locale) {
        case 'en':
          return 'Menu';
        case 'tc':
          return '目録';
        default:
          return 'Menu';
      }
    };
    return (
      <Button
        variant='info'
        onClick={() => handleEvent({ command: 'toggleMenu' })}
      >
        {text()}
      </Button>
    );
  };
  // <HamburgerButton
  //   isActive={isMenuOpen}
  //   onClick={() => handleEvent({ command: 'toggleMenu' })}
  //   isTop={isTop}
  //   {...props}
  // />
  return (
    <div className={`header ${isTop ? '' : 'header--no-top'}`}>
      <Logo {...props} isTop={isTop} />
      {renderMenuButton()}
    </div>
  );
};
HomeHeader.defaultProps = {
  isMenuOpen: false,
  handleEvent: () => {},
  locale: 'en',
};
HomeHeader.propTypes = {
  isMenuOpen: PropTypes.bool,
  handleEvent: PropTypes.func,
  locale: PropTypes.string,
};

export default withLocale(HomeHeader);
