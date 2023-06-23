import styles from './projectList.module.scss';
import ProjectCard from "./ProjectCard";
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';
import tattoo from '../../assets/tattoo.png';

import { useContext } from 'react';

export default function ProjectList({ data, onToggleModal }) {
    const dispatch = useContext(ModalDataDispatchContext);

    const handleModalOpen = () => {
        dispatch({ type: 'create' });
        onToggleModal();
    }

    const processDataa = () => {
        if (data) {
            const copy = [...data];
            const packedData = [];

            while (copy.length) {
                packedData.push(copy.splice(0, 2))
            }
            return packedData;
        }
    }

    return (
        <section id='second' className={styles.listSection}>
            <h3><img src={tattoo} />Work</h3>
            <div className={styles.list}>
                {processDataa() && processDataa().map((row, rowOrder) => {
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