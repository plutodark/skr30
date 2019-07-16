import React from 'react';
import './style.scss';

const Tag = (props) => {
  const {
    label,
    icon,
    handleEvent,
    className,
    style,
  } = props;
  const renderIcon = () => (
    <i className={'material-icons md-16 tag--icon'}>{icon}</i>
  );
  const renderLabel = () => (
    <div className={'tag--label'}>
      {label}
    </div>
  );
  const renderCloseButton = () => (
    <i
      onClick={() => handleEvent({ command: 'close' })}
      className={'material-icons md-16 tag--close-button'}
    >
      {'close'}
    </i>
  );
  return (
    <div
      onClick={() => handleEvent({ command: 'click' })}
      className={`tag ${className}`}
      style={style}
    >
      {icon && renderIcon()}
      {renderLabel()}
      {renderCloseButton()}
    </div>
  );
};

export default Tag;
