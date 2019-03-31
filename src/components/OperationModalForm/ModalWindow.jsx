import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import OperationForm from './OperationForm';

ReactModal.setAppElement('#root');

const ModalWindow = ({ isOpen, closeModal, onSubmit }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '30px',
      transform: 'translate(-50%, -50%)',
      marginRight: '-50%',
      width: '300px',
      height: '50%',
    },
  };

  const [addAnother, setAddAnother] = useState(false);

  const onSubmitHandler = opeartion => {
    onSubmit(opeartion);
    !addAnother && closeModal();
  };

  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={closeModal}>
      <button className="btn-close" type="button" onClick={closeModal}>
        x
      </button>
      <OperationForm onCreateOperation={onSubmitHandler} />
      <label>
        <input
          name="shouldClose"
          type="checkbox"
          defaultChecked={addAnother}
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
