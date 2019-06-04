import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';
import HomeHeader from '../../components/molecules/HomeHeader';
import withWindowSizeDetector from '../../components/hoc/withWindowSizeDetector';
import LanguageButton from '../../components/atoms/LanguageButton';
import MenuModal from '../../components/atoms/MenuModal';
import './style.scss';
import homeImg from '../../asset/images/home.jpg';

ReactGA.initialize('UA-135003930-1');

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleEvent = (payload) => {
    const { command } = payload;
    switch (command) {
      case 'toggleMenu':
        return setIsMenuOpen(!isMenuOpen);
      default:
        break;
    }
    return null;
  };

  const {
    children,
    location,
  } = props;
  ReactGA.pageview(location.pathname + location.search);
  const isHome = location.pathname === '/';
  return (
    <div className='layout'>
      {isHome && <img className={'layout--cover-image'} src={homeImg} alt='home' />}
      <div className={`${isHome ? 'layout--home-content' : ''}`}>
        <div className='layout--content'>
          {children}
        </div>
      </div>
      <HomeHeader
        isMenuOpen={isMenuOpen}
        handleEvent={handleEvent}
        {...props}
      />
      <MenuModal isOpen={isMenuOpen} onClose={() => handleEvent({ command: 'toggleMenu' })} {...props} />
      <LanguageButton {...props} />
    </div>
  );
};

Layout.defaultProps = {
  isHome: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
};

export default withRouter(withWindowSizeDetector(Layout));
