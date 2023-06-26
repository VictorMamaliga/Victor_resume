import { useContext, useState } from 'react';
import Switch from "react-switch";

import styles from './sidebarProjectCard.module.scss';
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';
import deleteIcon from '../../assets/icons/trash.svg';
import editIcon from '../../assets/icons/edit.svg';

export default function SidebarProjectCard({card, onToggleModal, onSubmitForm}) {
    const [visible, setIsVisible] = useState(false);
    const dispatch = useContext(ModalDataDispatchContext);
    console.log(card)

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
    
    const handleToggleVisibility = () => {
        dispatch({
            type: 'visibility',
            data: card,
        });
        
        onToggleModal();
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={card.imgURL}/>
            </div>
            <div className={styles.cardDetails}>
                <div className="visibility">
                <label>
                    <Switch uncheckedIcon={false} checkedIcon={false} onChange={handleToggleVisibility} checked={card.isVisible} />
                    <span>Visible</span>
                </label>
                </div>
                <div className={styles.cardActions}>
                    <div><img className={styles.cardDelete} src={deleteIcon} onClick={handleDeleteCard} /></div>
                    <div><img className={styles.cardEdit} src={editIcon} onClick={handleEditCard} /></div>
                </div>
                <h3>I am a sidebar project</h3>
            </div>
        </div>
    );
}