import React, { useState } from 'react';
import { map, assign, indexOf, filter } from 'lodash';
import { Modal } from 'react-bootstrap';
import withPhotoAssets from '../../hoc/withPhotoAssets';
import Input from '../../atoms/Input';
import './style.scss';

const TagBibPopup = (props) => {
  const {
    isOpen,
    onClose,
    bibs,
    availableBibs,
    handleEvent,
    id,
  } = props;
  const [suggestions, setSuggestions] = useState([]);
  const tags = map(bibs,  o => ({ label: o, icon: 'looks_one' }));
  const handleInputEvent = (props) => {
    const { command, value } = props;
    let newCommand;
    switch (command) {
      case 'enter': {
        newCommand = 'addBib';
        const index = indexOf(availableBibs, value);
        if (index < 0) return null;
        break;
      }
      case 'removeTag':
        newCommand = 'removeBib';
        break;
      case 'autoComplete': {
        const temp = filter(availableBibs, str => str.includes(value));
        const objAry = map(temp, label => ({ label, icon: 'looks_one' }));
        return setSuggestions(objAry);
      }
      default:
        newCommand = command;
        break;
    }
    const newProps = assign({}, props, { command: newCommand, id });
    return handleEvent(newProps);
  };
  const renderInput = () => (
    <Input
      tags={tags}
      handleEvent={handleInputEvent}
      placeholder={'Input the bib number here'}
      isAutoComplete
      suggestions={suggestions}
    />
  );
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      size={'lg'}

    >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className={'tag-place-popup--body'}>
        <div className={'tag-place-popup--body--text'}>{'Tag Bib:'}</div>
        {renderInput()}
      </Modal.Body>
    </Modal>
  );
};

export default withPhotoAssets(TagBibPopup);
