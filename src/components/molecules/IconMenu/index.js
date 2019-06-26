import React, { useState } from 'react';
import { map } from 'lodash';
import IconButton from '../../atoms/IconButton';
import './style.scss';

const IconMenu = (props) => {
  const {
    className,
    style,
    commands,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const onOpenClick = () => {
    console.log('I am here');
    setIsOpen(!isOpen);
  };
  const renderMainButton = () => (
    <IconButton
      icon={isOpen ? 'expand_less' : 'more_vert'}
      onClick={onOpenClick}
    />
  );
  const renderMenuButton = (command, key) => {
    const { label, onClick, icon } = command;
    return (
      <div className={'icon-menu--menu--button'} key={key}>
        <IconButton
          icon={icon}
          className={'icon-menu--menu--button--icon'}
          label={label}
          onClick={onClick}
        />
      </div>
    );
  };
  const renderMenuButtons = () => (
    <div className={'icon-menu--menu'}>
      {map(commands, renderMenuButton)}
    </div>
  );
  return (
    <div className={`icon-menu ${className}`} style={style}>
      {renderMainButton()}
      {isOpen && renderMenuButtons()}
    </div>
  );
};

export default IconMenu;
