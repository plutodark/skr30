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
  const onOpenClick = () => setIsOpen(!isOpen);
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
  const renderOverlay = () => (
    <div className={'icon-menu--overlay'} onClick={onOpenClick} />
  );
  return (
    <div className={`icon-menu ${className}`} style={style}>
      {renderMainButton()}
      {isOpen && renderOverlay()}
      {isOpen && renderMenuButtons()}
    </div>
  );
};

export default IconMenu;
