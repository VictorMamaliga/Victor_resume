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
            {data.map((row, rowOrder) => {
                return (
                    <div key={rowOrder} className={rowOrder % 2 != 0 ? styles.listRight : null}>
                        {row.map((card, order) => <ProjectCard key={card.id} card={card} order={order} rowOrder={rowOrder} onToggleModal={onToggleModal} />)}
                    </div>
                )
            })}
            <button onClick={handleModalOpen}>Open Submit Project</button>
        </section>
    );
}