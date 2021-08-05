import { useState } from "react";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return { modalOpen, setModalOpen, handleOpenModal };
};

export default useModal;
