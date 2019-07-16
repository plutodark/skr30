import React from 'react';
import { Modal } from 'react-bootstrap';

const TagPlacePopup = (props) => {
  const {
    isOpen,
    onClose,
    place,
    handleEvent,
  } = props;
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
    >
      Place
    </Modal>
  );
};

export default TagPlacePopup;
