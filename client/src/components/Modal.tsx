import React, { useState } from "react";

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <div>
      {/* Оверлей и модальное окно */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose} // Закрываем окно при клике на фон
          />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-blue-900 p-6 rounded-lg shadow-lg max-w-md mx-auto relative">
              <button
                onClick={onClose} // Используем функцию здесь
                className="absolute top-4 right-4 text-white"
              >
                &times; {/* Символ закрытия */}
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
