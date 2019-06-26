import React from 'react';
import { PropTypes } from 'prop-types';
import MaterialIcon from 'material-icons-react';
import './style.scss';

const IconButton = (props) => {
  const {
    icon,
    onClick,
    className,
    label,
  } = props;
  const renderIcon = () => (
    <div
      className={'icon-button--icon'}
    >
      <MaterialIcon
        icon={icon}
      />
    </div>
  );
  const renderLabel = () => (
    <div className={'icon-button--label'}>{label}</div>
  );
  return (
    <div
      className={`icon-button ${className}`}
      onClick={onClick}
    >
      {label && renderLabel()}
      {renderIcon()}
    </div>
  );
};

IconButton.defaultProps = {
  className: '',
  icon: 'close',
  onClick: () => {},
  label: '',
};

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
};


export default IconButton;
