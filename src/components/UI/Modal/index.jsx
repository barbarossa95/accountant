import React from 'react';
import ReactModal from 'react-modal';
import { confirmable, createConfirmation } from 'react-confirm';

import './Modal.scss';

ReactModal.setAppElement('#root');

const Modal = ({
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
      className="modal-window"
      overlayClassName="react-overlay">
      <ModalContent {...props} proceed={proceed} dismiss={dismiss} />
    </ReactModal>
  );
};

export default function confirm(component, props) {
  return createConfirmation(confirmable(Modal))({ component, ...props });
}
