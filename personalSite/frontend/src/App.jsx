import { useReducer, useState } from "react";

import { ModalDataContext, ModalDataDispatchContext, modalDataReducer } from "./contexts/ModalDataContext";
import Header from "./components/organisms/Header";
import ProjectList from "./components/molecules/ProjectList";
import Modal from "./components/organisms/Modal";
import ProjectCard from './components/molecules/ProjectCard';
import useApi from "./api/useApi";
import Sidebar from "./components/organisms/Sidebar";
import ProjectEditForm from "./components/molecules/ProjectEditForm";
import AboutMe from "./components/organisms/AboutMe";
import MyOffers from "./components/organisms/MyOffers";
import Testimonials from "./components/organisms/Testimonials";
import Contact from "./components/organisms/Contact";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, dispatch] = useReducer(modalDataReducer, null);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false)
  const [george, setGeorge] = useState(null);
  const { projectsAPI, apiResponseStatus, handleOnSubmitForm, handleModalStatusOff } = useApi(modalData, handleAutoModalClose);
  // console.log(george)

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

  const handleSidebarReset = () => {
    setSidebarIsOpen(false);
    setTimeout(() => setEditMode(false), 600);
  }

  const handleGeorge = async e => {
    console.log(e)
    const myFile = e.target.files[0];

    let formData = new FormData();
    formData.append('file', myFile);
    console.log(formData)

    //posibil sa mearga si cu .then
    const response = await fetch('http://localhost:3333/projects/george', {
      method: 'POST',
      body: formData,
    });
    const responseJson = await response.json();
    console.log(responseJson)
  }

  return (
    <>
      <Header onSidebarIsOpen={handleSidebarToggle} />
      <ModalDataContext.Provider value={modalData}>
        <ModalDataDispatchContext.Provider value={dispatch}>
          <main>
            <input onChange={handleGeorge} type="file" />
            <Sidebar projectsAPI={projectsAPI} editMode={editMode} sidebarIsOpen={sidebarIsOpen} onSidebarIsOpen={handleSidebarToggle} onEditMode={() => setEditMode(!editMode)} onToggleModal={() => setIsModalOpen(!isModalOpen)} onSidebarReset={handleSidebarReset} onSubmitForm={handleOnSubmitForm} />
            <AboutMe />
            <MyOffers />
            <ProjectList data={projectsAPI} onToggleModal={() => setIsModalOpen(!isModalOpen)} />
            <Testimonials />
            <Contact />
          </main>
          <Modal isOpen={isModalOpen} apiResponseStatus={apiResponseStatus} onToggleModal={handleModalReset}>
            {editMode ? (
              <ProjectEditForm onSubmitForm={handleOnSubmitForm} />
            ) : (
              <ProjectCard  onToggleModal={() => setIsModalOpen(!isModalOpen)} />
            )}
          </Modal>
        </ModalDataDispatchContext.Provider>
      </ModalDataContext.Provider>
    </>
  )
}

export default App;
