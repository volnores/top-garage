import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  isOpenModal: boolean;
  handleCloseModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpenModal, handleCloseModal }) => {
  return (
    <div>
      {isOpenModal && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => {
              console.log('Overlay clicked');
              handleCloseModal();
            }}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="bg-blue-900 p-6 rounded-lg shadow-lg max-w-md mx-auto relative"
              onClick={(e) => e.stopPropagation()} // Остановка всплытия событий
            >
              <button onClick={handleCloseModal} className="absolute top-4 right-4 text-white">
                &times;
              </button>
              {children}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
