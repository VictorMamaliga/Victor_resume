import styles from './projectList.module.scss';
import ProjectCard from "./ProjectCard";
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';
import starImg from '../../assets/star.png';

import { useContext } from 'react';

export default function ProjectList({ data, onToggleModal }) {
    const dispatch = useContext(ModalDataDispatchContext);

    const handleModalOpen = () => {
        dispatch({ type: 'create' });
        onToggleModal();
    }

    return (
        <section id='second' className={styles.listSection}>
            <h3><img src={starImg} />My work</h3>
            <div className={styles.list}>
                {data.map((row, rowOrder) => {
                    return (
                        <div key={rowOrder} className={rowOrder % 2 != 0 ? styles.listRight : null}>
                            {row.map((card, order) => <ProjectCard key={card.id} card={card} order={order} rowOrder={rowOrder} onToggleModal={onToggleModal} />)}
                        </div>
                    )
                })}
                <button onClick={handleModalOpen}>New Project</button>
            </div>
        </section>
    );
}