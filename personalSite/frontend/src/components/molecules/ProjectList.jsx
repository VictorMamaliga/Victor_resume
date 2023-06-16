import styles from './projectList.module.scss';
import ProjectCard from "./ProjectCard";
import { useContext } from 'react';
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';

export default function ProjectList({ data, onOpenModal, handleCreste }) {
    const dispatch = useContext(ModalDataDispatchContext);

    const handleModalOpen = () => {
        dispatch({
            type: 'create'
        });

        onOpenModal();
    }
    console.log(data)
    return (
        <section className={styles.list}>
            {data.map(project => <ProjectCard key={project.id} id={project.id} onOpenModal={onOpenModal} handleCreste={handleCreste} name={project.name} description={project.description} imgURL={project.imgURL} redirrect={project.redirrect} />)}
            <button onClick={handleModalOpen}>Open Submit Project</button>
        </section>
    );
}