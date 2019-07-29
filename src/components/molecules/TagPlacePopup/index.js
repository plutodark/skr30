import React from 'react';
import { map, get, find, isNil } from 'lodash';
import { Modal, DropdownButton, Dropdown } from 'react-bootstrap';
import withLocale from '../../hoc/withLocale';
import withPhotoAssets from '../../hoc/withPhotoAssets';
import './style.scss';

const TagPlacePopup = (props) => {
  const {
    isOpen,
    onClose,
    places,
    selectedPlace,
    handleEvent,
    id,
    locale,
  } = props;
  const selectedPlaceObj = find(places, { id: selectedPlace });
  const selectedPlaceLabel = isNil(selectedPlaceObj) ? 'Unknown' : get(selectedPlaceObj, [locale], selectedPlaceObj.en);
  const renderItem = (place, key) => {
    const label = get(place, [locale], place.en);
    const placeId = get(place, 'id', 0);
    return (
      <Dropdown.Item
        key={key}
        onClick={() => handleEvent({ command: 'selectPlace', value: placeId, id })}
      >
        {label}
      </Dropdown.Item>
    );
};
  const renderItems = () => map(places, renderItem);
  const renderDropdown = () => (
    <DropdownButton title={selectedPlaceLabel}>
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

export default withPhotoAssets(withLocale(TagPlacePopup));
