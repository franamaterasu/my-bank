import Header from "../header";
import Home from "../../pages/home";
import ModalAdd from "../modal/modalAdd";
import useItem from "../listItem/useItem";
import usePortal from "react-useportal";

const App = () => {
  const { Portal } = usePortal();
  const {
    list,
    modalOpen,
    handleAddItem,
    handleDeleteAllItems,
    handleCloseModal,
  } = useItem();

  return (
    <>
      <Header />
      <Home
        list={list}
        handleAddItem={handleAddItem}
        handleDeleteAllItems={handleDeleteAllItems}
      />
      {modalOpen ? (
        <Portal>
          <ModalAdd
            modalTitle="Add new item"
            handleCloseModal={handleCloseModal}
          />
        </Portal>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
