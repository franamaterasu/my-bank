import "./modal.scss";

const Modal = ({ handleCloseModal, modalTitle, children }) => {
  return (
    <section className="modal">
      <div className="modal__screen">
        <header className="modal__header">
          <button
            onClick={handleCloseModal}
            className="modal__button modal__button--close"
          >
            X
          </button>
        </header>
        <h1 className="modal__title">{modalTitle}</h1>
        <section className="modal__body">{children}</section>
      </div>
    </section>
  );
};

export default Modal;
