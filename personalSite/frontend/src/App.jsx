import { useReducer, useState } from "react";

import Header from "./components/organisms/Header";
import Button from './components/atoms/Button';
import ProjectList from "./components/molecules/ProjectList";
import Modal from "./components/organisms/Modal";
import ProjectCreate from './components/molecules/ProjectCreate';
//import { projects } from './helpers';
import { ModalDataContext, ModalDataDispatchContext, modalDataReducer } from "./contexts/ModalDataContext";
import useApi from "./api/useApi";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, dispatch] = useReducer(modalDataReducer, null);

  console.log(modalData)

  // nu decomenta urmatoarea linie !!!!
  const { projects } = useApi();
      
  const postare = () => {
    console.log('iata clickul')
    fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      
    })
  }

  return (
    <>
      <Header />
      <ModalDataContext.Provider value={modalData}>
        <ModalDataDispatchContext.Provider value={dispatch}>
          <main>
            <Button text={'my button'} />
            <ProjectList data={projects} onToggleModal={() => setIsModalOpen(!isModalOpen)} />
            <footer>Numarul 1 in top</footer>
          </main>
          <Modal isOpen={isModalOpen} onToggleModal={() => setIsModalOpen(!isModalOpen)}>
              {modalData?.requestType === 'delete' ? (
                <h1>Are you sure?</h1>
              ) : (
                <ProjectCreate  onToggleModal={() => setIsModalOpen(!isModalOpen)} />
              )}
          </Modal>
        </ModalDataDispatchContext.Provider>
      </ModalDataContext.Provider>
    </>
  )
}

export default App;
