import styles from './projectPreview.module.scss';
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';

import { useContext } from 'react';

const ProfilPreview = ({ card, order, rowOrder, onToggleModal }) => {
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

  return (
    <div className={styles.card} onClick={handleEditCard}>
      <img src={imgURL} /> 
    </div>
  );
};
  

export default ProfilPreview;
