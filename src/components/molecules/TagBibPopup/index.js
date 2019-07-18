import React from 'react';
import { map, assign } from 'lodash';
import { Modal } from 'react-bootstrap';
import Input from '../../atoms/Input';
import './style.scss';

const TagBibPopup = (props) => {
  const {
    isOpen,
    onClose,
    bibs,
    handleEvent,
    id,
  } = props;
  const tags = map(bibs,  o => ({ label: o, icon: 'looks_one' }));
  const handleInputEvent = (props) => {
    const { command } = props;
    let newCommand;
    switch (command) {
      case 'enter':
        newCommand = 'addBib';
        break;
      case 'removeTag':
        newCommand = 'removeBib';
        break;
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

export default TagBibPopup;
