import styles from './projectList.module.scss';
import Modal from "../organisms/Modal";
import ProjectCard from "./ProjectCard";
import ProjectCreate from "./ProjectCreate";

import { useState } from 'react';


export default function ProjectList({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleOpenModal = () => {
        setModalData(null);
        setIsModalOpen(true);
    }

    const handleOpenModalWithData = data => {
        // setModalData(data)
        console.log(data)
    }

    return (
        <section className={styles.list}>
            {data.map(project => <ProjectCard key={project.id} name={project.data.name} description={project.data.description} imageURL={project.data.imgURL} redirrect={project.data.redirrect} />)}
            <Modal isOpen={isModalOpen} modalData={modalData} onClose={() => setIsModalOpen(false)}>
                <ProjectCreate />
            </Modal>
            <button onClick={handleOpenModal}>Open Submit Project</button>
        </section>
    );
}