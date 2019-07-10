import React from 'react';
import { get } from 'lodash';
import { Modal, ModalBody } from 'react-bootstrap';
import IconButton from '../IconButton';

import './style.scss';

const PhotoModal = (props) => {
  const {
    isOpen,
    photo,
    onClose,
  } = props;

  const renderCloseButton = () => (
    <div className='photo-modal--closeButton'>
      <IconButton icon={'close'} onClick={onClose} />
    </div>
  );
  const renderPhoto = () => {
    const src = get(photo, 'watermark', '');
    const id = get(photo, 'id', '');
    return (
      <img className={'photo-modal--photo'} src={src} alt={id} />
    );
  };
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      dialogClassName='photo-modal--dialog'
      size='lg'
    >
      <ModalBody>
        <div className='photo-modal--modalBody'>
          {renderCloseButton()}
          {renderPhoto()}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default PhotoModal;
