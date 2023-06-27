import styles from './projectList.module.scss';
import ProjectPreview from "./ProjectPreview";
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';
import { useContext } from 'react';

export default function ProjectList({ data, onToggleModal }) {
    const dispatch = useContext(ModalDataDispatchContext);

    const handleModalOpen = () => {
        dispatch({ type: 'create' });
        onToggleModal();
    }

    return (
        <section id='second' className={styles.listSection}>
            <div className={styles.list}>
                {data && data.map(card => card.isVisible && <ProjectPreview key={card.id} card={card} onToggleModal={onToggleModal} />)}
            </div>
            <button onClick={handleModalOpen}>New Project</button>
        </section>
    );
}