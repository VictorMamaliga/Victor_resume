import { useContext } from 'react';
import styles from './sidebarProjectCard.module.scss';
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';

export default function SidebarProjectCard({card, onToggleModal}) {
    const dispatch = useContext(ModalDataDispatchContext);

    const handleEditCard = () => {
        dispatch({
          type: 'edit',
          data: card,
        });
        
        onToggleModal();
      }
      
    const handleDeleteCard = () => {
        dispatch({
            type: 'delete',
            id: card.id,
        });

        onToggleModal();
    }

    return (
        <div className={styles.card}>
            <div>
                <h3>I am a sidebar project</h3>
                <div onClick={onToggleModal}>
                    <small onClick={handleDeleteCard}>sterge</small>
                    <small onClick={handleEditCard}>editeaza</small>
                    <small>ascunde</small>
                </div>
            </div>
            <div className={styles.cardImage}>
                <img src={card.imgURL}/>
            </div>
        </div>
    );
}