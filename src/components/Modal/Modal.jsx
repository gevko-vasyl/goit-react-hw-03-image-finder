import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "./Modal.scss";

const modalRoot = document.getElementById("modalRoot");

export default function Modal({ largeImg, toggleModal }) {
  useEffect(() => {
    const handleEscClick = (e) => e.code === "Escape" && toggleModal();
    window.addEventListener("keydown", handleEscClick);
    return () => window.removeEventListener("keydown", handleEscClick);
  }, [toggleModal]);

  const handleOverlayClick = (e) =>
    e.target === e.currentTarget && toggleModal();
  return createPortal(
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img src={largeImg} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};
