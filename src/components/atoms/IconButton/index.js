import React from 'react';
import { PropTypes } from 'prop-types';
import MaterialIcon from 'material-icons-react';
import './style.scss';

const IconButton = (props) => {
  const {
    icon,
    onClick,
    className,
  } = props;
  return (
    <div
      className={`icon-button ${className}`}
      onClick={onClick}
    >
      <MaterialIcon
        icon={icon}
      />
    </div>
  );
};

IconButton.defaultProps = {
  className: '',
  icon: 'close',
  onClick: () => {},
};

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};


export default IconButton;
