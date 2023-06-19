import styles from './projectList.module.scss';
import ProjectCard from "./ProjectCard";
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';

import { useContext } from 'react';

export default function ProjectList({ data, onToggleModal }) {
    const dispatch = useContext(ModalDataDispatchContext);

    const handleModalOpen = () => {
        dispatch({ type: 'create' });
        onToggleModal();
    }

    return (
        <section className={styles.list}>
            {data.map(project => <ProjectCard key={project.id} project={project} onToggleModal={onToggleModal} />)}
            <button onClick={handleModalOpen}>Open Submit Project</button>
        </section>
    );
}