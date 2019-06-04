import React from 'react';
import { isEmpty } from 'lodash';
import { Nav } from 'react-bootstrap';
import logoBlue from '../../../asset/images/logoBlue.png';
import logoWhite from '../../../asset/images/logoWhite.png';
import './style.scss';

const Logo = (props) => {
  const { location, isTop, isHome } = props;
  const href = isEmpty(location) ? '/' : `/${location.search}`;
  const logo = isHome && isTop ? logoWhite : logoBlue;
  return (
    <Nav.Link href={href}>
      <img className='logo' src={logo} alt='logo' />
    </Nav.Link>
  );
};

export default Logo;
