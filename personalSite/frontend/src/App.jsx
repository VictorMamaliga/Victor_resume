import { useContext, useReducer, useState } from "react";

import Header from "./components/organisms/Header";
import Button from './components/atoms/Button';
import ProjectList from "./components/molecules/ProjectList";
import useApi from "./api/useApi";
import { projects } from './helpers';
import Modal from "./components/organisms/Modal";
import ProjectCreate from './components/molecules/ProjectCreate';
import { ProjectContext } from "./contexts/ProjectContext";
import { ModalDataContext, ModalDataDispatchContext } from "./contexts/ModalDataContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(0);
  const [georgeData, dispatch] = useReducer(modalDataReducer, null);


  // nu decomenta urmatoarea linie !!!!
  // const { projects } = useApi();

  const handleOpenModal = () => {
    setModalData(null);
    setIsModalOpen(true);
  }

  const creste = () => {
    setModalData(modalData + 1);
  }

  const cere = () => {
    // fetch('http://localhost:8080/api/posts', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({name: 'kyle'})
    //   }).then(r => r.json()).then(r => console.log(r))
  }
      
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
      <ModalDataContext.Provider value={georgeData}>
        <ModalDataDispatchContext.Provider value={dispatch}>
          {console.log(georgeData)}
          <main>
            <button onClick={postare}>posteaza</button>
            <button onClick={cere}>cere</button>
            <Button text={'my button'} />
            <ProjectList data={projects} onOpenModal={handleOpenModal} handleCreste={creste} />
            <footer>Numarul 1 in top</footer>
          </main>
          <Modal isOpen={isModalOpen} modalData={modalData} onClose={() => setIsModalOpen(false)}>
              <ProjectCreate />
          </Modal>
        </ModalDataDispatchContext.Provider>
      </ModalDataContext.Provider>
    </>
  )
}

function modalDataReducer(values, action) {
  switch (action.type) {
    case 'create': {
      return null;
    }
    case 'edit': {
      return action.data;
    }    
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default App;
