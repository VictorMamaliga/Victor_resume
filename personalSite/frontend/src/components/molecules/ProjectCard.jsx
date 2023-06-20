import styles from './projectCard.module.scss';
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';

import { useContext } from 'react';

const ProfileCard = ({ card, order, rowOrder, onToggleModal }) => {
  const dispatch = useContext(ModalDataDispatchContext);
  const { id, name, description, imgURL, redirrect } = card;

  const handleEditCard = e => {
    dispatch({
      type: 'edit',
      data: card,
    });
    
    onToggleModal();
  }
  
  const handleDeleteCard = () => {
    dispatch({
      type: 'delete',
      id,
    });

    onToggleModal();
  }

  const handleShuffle = () => {
    if (rowOrder % 2 == 0) {
      if (order) return "cardInverse";
    } else {
      if (!order) return "cardInverse"
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles[handleShuffle()]}>
        <div>
          <h2 className={styles.name}>{name}</h2>
          <small className={styles.description}>{description}</small>
          <p>
            <button onClick={handleEditCard}>Edit</button>
            <button onClick={handleDeleteCard}>Delete</button>
          </p>
        </div>
        <a className={styles.cardImageWrapper} href={redirrect} target='_blank'>
          <img src={imgURL} /> 
        </a>
      </div>
    </div>
  );
};
  

export default ProfileCard;
