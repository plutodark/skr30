import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const PhotoButton = (props) => {
  const {
    onClick,
    src,
  } = props;
  return (
    <div
      className={'photo-button'}
      onClick={onClick}
    >
      <img
        src={src}
        alt={'thumbnail'}
        className={'photo-button--image'}
      />
    </div>
  );
};

PhotoButton.defaultProps = {
  onClick: () => {},
  src: '',
};

PhotoButton.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string,
};

export default PhotoButton;
