import React from 'react';
import { map } from 'lodash';
import { Modal } from 'react-bootstrap';
import Input from '../../atoms/Input';
import './style.scss';

const TagBibPopup = (props) => {
  const {
    isOpen,
    onClose,
    bibs,
    handleEvent,
  } = props;
  const tags = map(bibs,  o => ({ label: o, icon: 'looks_one' }));
  const renderInput = () => (
    <Input
      tags={tags}
      handleEvent={handleEvent}
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
