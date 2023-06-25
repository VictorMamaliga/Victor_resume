import { useReducer, useState } from "react";

import { ModalDataContext, ModalDataDispatchContext, modalDataReducer } from "./contexts/ModalDataContext";
import Header from "./components/organisms/Header";
import ProjectList from "./components/molecules/ProjectList";
import Modal from "./components/organisms/Modal";
import ProjectCard from './components/molecules/ProjectCard';
import useApi from "./api/useApi";
import Presentation from "./components/organisms/Presentation";
import Ending from "./components/organisms/Ending";
import Sidebar from "./components/organisms/Sidebar";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, dispatch] = useReducer(modalDataReducer, null);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const { projectsAPI, apiResponseStatus, handleOnSubmitForm, handleModalStatusOff } = useApi(modalData, handleAutoModalClose);

  function handleAutoModalClose() {
    setIsModalOpen(false);
  }

  const handleModalReset = () => {
    handleModalStatusOff();
    setIsModalOpen(false);
  }

  const handleSidebarToggle = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  }

  return (
    <>
      <Header onSidebarIsOpen={handleSidebarToggle} />
      <ModalDataContext.Provider value={modalData}>
        <ModalDataDispatchContext.Provider value={dispatch}>
          <main>
            <Sidebar sidebarIsOpen={sidebarIsOpen} onSidebarIsOpen={handleSidebarToggle} />
            <Presentation />
            <ProjectList data={projectsAPI} onToggleModal={() => setIsModalOpen(!isModalOpen)} />
            <Ending />
          </main>
          <Modal isOpen={isModalOpen} apiResponseStatus={apiResponseStatus} onToggleModal={handleModalReset}>
            <ProjectCard onSubmitForm={handleOnSubmitForm}  onToggleModal={() => setIsModalOpen(!isModalOpen)} />
          </Modal>
        </ModalDataDispatchContext.Provider>
      </ModalDataContext.Provider>
    </>
  )
}

export default App;
