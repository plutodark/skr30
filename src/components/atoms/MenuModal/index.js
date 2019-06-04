import React from 'react';
import { map, isEmpty } from 'lodash';
import { ListGroup } from 'react-bootstrap';
import { Modal, ModalBody } from 'react-bootstrap';
import menu from '../../../text/menu';
import TranslatableText from '../TranslatableText';
import HamburgerButton from '../HamburgerButton';
import './style.scss';

const MenuModal = (props) => {
  const {
    isOpen,
    onClose,
    location,
  } = props;
  const renderLinks = () => map(menu, (item, index) => {
    let { href } = item;
    if (!isEmpty(location)) {
      href = `${href}${location.search}`;
    }
    return (
      <ListGroup.Item action
        key={index}
        to={href}
        className='menu-modal--link'
        onClick={onClose}
      >
        <TranslatableText dictionary={item} {...props} />
      </ListGroup.Item>
    );
  });
  const renderCloseButton = () => (
    <div className='menu-modal--closeButton'>
      <HamburgerButton isActive onClick={onClose} />
    </div>
  );
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      dialogClassName='menu-modal--dialog'
      size='lg'
    >
      <ModalBody>
        <div className='menu-modal--modalBody'>
          {renderCloseButton()}
          <ListGroup>
            {renderLinks()}
          </ListGroup>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default MenuModal;
