import { useReducer, useState } from "react";

import Header from "./components/organisms/Header";
import Button from './components/atoms/Button';
import ProjectList from "./components/molecules/ProjectList";
import Modal from "./components/organisms/Modal";
import ProjectCreate from './components/molecules/ProjectCreate';
import { projects } from './helpers';
import { ModalDataContext, ModalDataDispatchContext, modalDataReducer } from "./contexts/ModalDataContext";
import useApi from "./api/useApi";
import Marquee from "./components/molecules/Marquee";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, dispatch] = useReducer(modalDataReducer, null);
  const { projectsAPI, apiResponseStatus, handleOnSubmitForm, handleApiResponseStatus } = useApi(modalData);

  return (
    <>
      <Header />
      <ModalDataContext.Provider value={modalData}>
        <ModalDataDispatchContext.Provider value={dispatch}>
          <main>
            <Button text={'my button'} />
            <ProjectList data={projectsAPI} onToggleModal={() => setIsModalOpen(!isModalOpen)} />
            <Marquee 
              title1="First part of title"
              title2="Second part of title"
              title3="Third part of title"
              word1="First word"
              word2="Second word"
              word3="Third word"
              buttonImage="https://i1.sndcdn.com/artworks-000021223010-8s64rf-t500x500.jpg"
            />
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
