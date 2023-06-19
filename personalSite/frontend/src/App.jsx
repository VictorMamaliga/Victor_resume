import { useEffect, useReducer, useState } from "react";

import Header from "./components/organisms/Header";
import Button from './components/atoms/Button';
import ProjectList from "./components/molecules/ProjectList";
import Modal from "./components/organisms/Modal";
import ProjectCreate from './components/molecules/ProjectCreate';
import { projects } from './helpers';
import { ModalDataContext, ModalDataDispatchContext, modalDataReducer } from "./contexts/ModalDataContext";
import useApi from "./api/useApi";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, dispatch] = useReducer(modalDataReducer, null);

  console.log(modalData)

  // nu decomenta urmatoarea linie !!!!
  const { projectsAPI, apiResponseStatus, handleOnSubmitForm, handleApiResponseStatus } = useApi(modalData);

  return (
    <>
      <Header />
      <ModalDataContext.Provider value={modalData}>
        <ModalDataDispatchContext.Provider value={dispatch}>
          <main>
            <Button text={'my button'} />
            <ProjectList data={projectsAPI}  onToggleModal={() => setIsModalOpen(!isModalOpen)} />
            <footer>Numarul 1 in top</footer>
          </main>
          <Modal isOpen={isModalOpen} apiResponseStatus={apiResponseStatus} onToggleModal={() => setIsModalOpen(!isModalOpen)} onApiResponseStatus={handleApiResponseStatus}>
            <ProjectCreate onSubmitForm={handleOnSubmitForm}  onToggleModal={() => setIsModalOpen(!isModalOpen)} />
          </Modal>
        </ModalDataDispatchContext.Provider>
      </ModalDataContext.Provider>
    </>
  )
}

export default App;
