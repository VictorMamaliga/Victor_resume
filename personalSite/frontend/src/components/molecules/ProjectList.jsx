import styles from './projectList.module.scss';
import ProjectCard from "./ProjectCard";
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';

import { useContext } from 'react';

export default function ProjectList({ data, onOpenModal }) {
    const dispatch = useContext(ModalDataDispatchContext);

    const handleModalOpen = () => {
        dispatch({ type: 'create' });
        onOpenModal();
    }

    return (
        <section className={styles.list}>
            {data.map(project => <ProjectCard key={project.id} id={project.id} name={project.name} description={project.description} imgURL={project.imgURL} redirrect={project.redirrect} onOpenModal={onOpenModal} />)}
            <button onClick={handleModalOpen}>Open Submit Project</button>
        </section>
    );
}