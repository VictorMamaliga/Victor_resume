import styles from './projectPreview.module.scss';
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';

import { useContext } from 'react';

const ProfilPreview = ({ card, onToggleModal }) => {
  const dispatch = useContext(ModalDataDispatchContext);

  const handleCardView = () => {
    dispatch({
      type: 'view',
      data: card,
    })

    onToggleModal()
  }

  return (
    <div className={styles.card} onClick={handleCardView}>
      <img src={card.imgURL} /> 
    </div>
  );
};
  

export default ProfilPreview;
