import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

const modalRoot = document.getElementById("modal-root");

export default function Modal({ title, children, onClose }: ModalProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!modalRoot) return null;

  return createPortal(
    <div className="modalOverlay" onMouseDown={onClose} role="presentation">
      <div
        className="modal"
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="modal__header">
          <p className="modal__title">{title}</p>
          <button className="modal__close" type="button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal__body">{children}</div>
      </div>
    </div>,
    modalRoot
  );
}
