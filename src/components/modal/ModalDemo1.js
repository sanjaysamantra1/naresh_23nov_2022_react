import React from "react";
import Modal from 'react-modal';

export default function ModalDemo1() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <div>this is a div</div>
        <input />
      </Modal>
    </div>
  );
}
