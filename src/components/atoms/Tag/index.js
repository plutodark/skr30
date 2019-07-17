import React from 'react';
import MaterialIcon from 'material-icons-react';
import './style.scss';

const Tag = (props) => {
  const {
    label,
    icon,
    handleEvent,
    className,
    style,
    isCloseButtonShown,
  } = props;
  const renderIcon = () => (
    <MaterialIcon className={'material-icons md-16 tag--icon'} icon={icon} />
  );
  const renderLabel = () => (
    <div className={'tag--label'}>
      {label}
    </div>
  );
  const renderCloseButton = () => (
    <MaterialIcon
      onClick={() => handleEvent({ command: 'close' })}
      className={'material-icons md-16 tag--close-button'}
      icon={'close'}
    />
  );
  return (
    <div
      onClick={() => handleEvent({ command: 'click' })}
      className={`tag ${className}`}
      style={style}
    >
      {icon && renderIcon()}
      {renderLabel()}
      {isCloseButtonShown && renderCloseButton()}
    </div>
  );
};
Tag.defaultProps = {
  isCloseButtonShown: true,
};

export default Tag;
