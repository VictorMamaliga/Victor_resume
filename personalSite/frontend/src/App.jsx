import { useReducer, useState } from "react";
import Slider from "react-slick";

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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, dispatch] = useReducer(modalDataReducer, null);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false)
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

  const handleSidebarReset = () => {
    setSidebarIsOpen(false);
    setTimeout(() => setEditMode(false), 600);
  }

  return (
    <>
      <Header onSidebarIsOpen={handleSidebarToggle} />
      <ModalDataContext.Provider value={modalData}>
        <ModalDataDispatchContext.Provider value={dispatch}>
          <main>
            <Sidebar projectsAPI={projectsAPI} editMode={editMode} sidebarIsOpen={sidebarIsOpen} onSidebarIsOpen={handleSidebarToggle} onEditMode={() => setEditMode(!editMode)} onToggleModal={() => setIsModalOpen(!isModalOpen)} onSidebarReset={handleSidebarReset} onSubmitForm={handleOnSubmitForm} />
            <AboutMe />
            <MyOffers />
            <ProjectList data={projectsAPI} onToggleModal={() => setIsModalOpen(!isModalOpen)} />
            <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
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
