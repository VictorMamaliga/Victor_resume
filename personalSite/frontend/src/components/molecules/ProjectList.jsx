import styles from './projectList.module.scss';
import ProjectCard from "./ProjectCard";
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';

import { useContext, useState } from 'react';

export default function ProjectList({ data, onToggleModal }) {

    const [order, setOrder] = useState(false); 
    const dispatch = useContext(ModalDataDispatchContext);
    

    const handleModalOpen = () => {
        dispatch({ type: 'create' });
        onToggleModal();
    }

    return (
        <section className={styles.list}>
            {data.map(project => <ProjectCard key={project.id} id={project.id} name={project.name} description={project.description} imgURL={project.imgURL} redirrect={project.redirrect} onToggleModal={onToggleModal} />)}
            <button onClick={handleModalOpen}>Open Submit Project</button>
        </section>
    );
}