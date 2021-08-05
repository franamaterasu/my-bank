import Modal from "../modal";
import "./modalAdd.scss";

const ModalAdd = ({ modalTitle, handleCloseModal }) => {
  return (
    <Modal modalTitle={modalTitle} handleCloseModal={handleCloseModal}>
      <form className="modal-add__form">
        <div className="modal-add__form-row">
          <label className="modal-add__form-label" for="title">
            Title
          </label>
          <input
            id="title"
            class="modal-add__form-input"
            type="text"
            placeholder="insert title"
          />
        </div>
        <div className="modal-add__form-row">
          <label className="modal-add__form-label" for="subject">
            Subject
          </label>
          <input
            id="subject"
            className="modal-add__form-input"
            type="text"
            placeholder="insert subject"
          />
        </div>
        <div className="modal-add__form-row">
          <label className="modal-add__form-label" for="type">
            Type
          </label>
          <select id="type" className="modal-add__form-input">
            <option value="select-type">Select type...</option>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
          </select>
        </div>
        <div className="modal-add__form-row">
          <label className="modal-add__form-label" for="count">
            Count
          </label>
          <input
            id="counter"
            className="modal-add__form-input"
            type="text"
            placeholder="Insert total count"
          />
        </div>
        <input
          className="modal-add__form-submit"
          type="submit"
          value="Add item"
        />
      </form>
    </Modal>
  );
};

export default ModalAdd;
