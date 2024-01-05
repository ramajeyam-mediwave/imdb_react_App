// Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  error: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, error }) => {
  return (
    <>
      {isOpen && (
        <dialog open={isOpen} onClose={onClose}>
          <article>
            <h3>{error}</h3>
            <button onClick={onClose}>Close</button>
          </article>
        </dialog>
      )}
    </>
  );
};

export default Modal;
