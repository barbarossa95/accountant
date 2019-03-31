import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import OperationForm from './OperationForm';

ReactModal.setAppElement('#root');

const ModalWindow = ({ isOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [addAnother, setAddAnother] = useState(false);

  const onSubmit = opeartion => {
    console.log(opeartion);
    addAnother && closeModal();
  };

  return (
    <ReactModal customStyles={customStyles} isOpen={isOpen}>
      <OperationForm onSubmit={onSubmit} />

      <label>
        <input
          name="shouldClose"
          type="checkbox"
          onChange={e => setAddAnother(e.target.checked)}
        />
        Добавить еще
      </label>
    </ReactModal>
  );
};

ModalWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default ModalWindow;
