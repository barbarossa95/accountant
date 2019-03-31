import React, { useState } from 'react';

import ModalWindow from './ModalWindow';

import './OperationModalForm.scss';

const OperationModalForm = ({ onSubmit }) => {
  const [isOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <React.Fragment>
      <h2>Добавить новую операцию</h2>
      <button onClick={openModal}>Добавить</button>

      <ModalWindow
        isOpen={isOpen}
        closeModal={closeModal}
        onSubmit={onSubmit}
      />
    </React.Fragment>
  );
};

export default OperationModalForm;
