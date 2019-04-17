import React from 'react';
// import PropTypes from 'prop-types';
import { confirmable, createConfirmation } from 'react-confirm';
import ReactModal from 'react-modal';

import './Modal.scss';

ReactModal.setAppElement('#root');

export const Modal = ({
  show,
  dismiss,
  proceed,
  cancel,
  component: ModalContent,
  ...props
}) => {
  return (
    <ReactModal
      isOpen={show}
      onRequestClose={dismiss}
      className="react-modal"
      overlayClassName="react-modal__overlay">
      <ModalContent {...props} />
    </ReactModal>
  );
};

export default function confirm(component, props) {
  return createConfirmation(confirmable(Modal))({ component, ...props });
}
