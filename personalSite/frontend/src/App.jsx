import { useEffect, useReducer, useState } from "react";

import Header from "./components/organisms/Header";
import ProjectList from "./components/molecules/ProjectList";
import Modal from "./components/organisms/Modal";
import ProjectCreate from './components/molecules/ProjectCreate';
import { projects } from './helpers';
import { ModalDataContext, ModalDataDispatchContext, modalDataReducer } from "./contexts/ModalDataContext";
import useApi from "./api/useApi";
import MarqueeList from "./components/molecules/MarqueeList";
import Presentation from "./components/organisms/Presentation";
import Ending from "./components/organisms/Ending";






function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, dispatch] = useReducer(modalDataReducer, null);
  const { projectsAPI, apiResponseStatus, handleOnSubmitForm, handleApiResponseStatus } = useApi(modalData, handleAutoModalClose);

  function handleAutoModalClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <ModalDataContext.Provider value={modalData}>
        <ModalDataDispatchContext.Provider value={dispatch}>
          <main onScroll={() => console.log('george')}>
            <Presentation />
            <ProjectList data={projectsAPI} onToggleModal={() => setIsModalOpen(!isModalOpen)} />
            <Ending />
          </main>
          <Modal isOpen={isModalOpen} apiResponseStatus={apiResponseStatus} onToggleModal={() => setIsModalOpen(!isModalOpen)}>
            <ProjectCreate onSubmitForm={handleOnSubmitForm}  onToggleModal={() => setIsModalOpen(!isModalOpen)} />
          </Modal>
        </ModalDataDispatchContext.Provider>
      </ModalDataContext.Provider>
    </>
  )
}

export default App;
