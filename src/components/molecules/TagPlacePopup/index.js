import React from 'react';
import { map } from 'lodash';
import { Modal, DropdownButton, Dropdown } from 'react-bootstrap';
import './style.scss';

const TagPlacePopup = (props) => {
  const {
    isOpen,
    onClose,
    places,
    selectedPlace,
    handleEvent,
    id,
  } = props;
  const renderItem = (place, item) => (
    <Dropdown.Item onClick={() => handleEvent({ command: 'select', value: place, id })}>{place}</Dropdown.Item>
  );
  const renderItems = () => map(places, renderItem);
  const renderDropdown = () => (
    <DropdownButton title={selectedPlace}>
      {renderItems()}
    </DropdownButton>
  );
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
    >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className={'tag-place-popup--body'}>
        <div className={'tag-place-popup--body--text'}>{'Tag Place:'}</div>
        {renderDropdown()}
      </Modal.Body>
    </Modal>
  );
};

export default TagPlacePopup;
