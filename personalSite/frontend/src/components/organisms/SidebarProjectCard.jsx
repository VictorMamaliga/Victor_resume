import { useContext, useState } from 'react';
import Switch from "react-switch";

import styles from './sidebarProjectCard.module.scss';
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';
import deleteIcon from '../../assets/icons/trash.svg';
import editIcon from '../../assets/icons/edit.svg';

export default function SidebarProjectCard({card, onToggleModal}) {
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
            data: { id: card.id, isVisible: card.isVisible },
        });
        
        onToggleModal();
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={card.imgURL}/>
            </div>
            <div className={styles.cardDetails}>
                <div>
                <label>
                    <Switch onColor={'#0d0673'} offColor={'#712727'} handleDiameter={22} height={25} width={48} uncheckedIcon={false} checkedIcon={false} onChange={handleToggleVisibility} checked={card.isVisible} />
                    <span>Visible</span>
                </label>
                </div>
                <div className={styles.cardActions}>
                    <div><img className={styles.cardDelete} src={deleteIcon} onClick={handleDeleteCard} /></div>
                    <div><img className={styles.cardEdit} src={editIcon} onClick={handleEditCard} /></div>
                </div>
                <h3>{card.name}</h3>
            </div>
        </div>
    );
}