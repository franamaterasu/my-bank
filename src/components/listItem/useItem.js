import { useState } from "react";
import useModal from "../modal/useModal";

const useItem = () => {
  const { modalOpen, setModalOpen, handleOpenModal } = useModal();

  const [list, setList] = useState([]);

  const handleAddItem = () => {
    handleOpenModal();
  };

  const handleDeleteAllItems = () => {
    alert("Todos los items borrados");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return {
    list,
    handleAddItem,
    handleDeleteAllItems,
    modalOpen,
    handleCloseModal,
  };
};

export default useItem;
