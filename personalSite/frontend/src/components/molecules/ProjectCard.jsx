import styles from './projectCard.module.scss';
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';

import { useContext } from 'react';

const ProfileCard = ({ id, name, description, imgURL, redirrect, order, onOpenModal }) => {
  const dispatch = useContext(ModalDataDispatchContext);

  const handleEditProject = () => {
    dispatch({
      type: 'edit',
      data: { id, name, description, imgURL, redirrect }
    });

    onOpenModal();
  }

  return (
    <div className={`${styles.profileCard} ${styles[order]}`}>
      <div className={styles.profileInfo}>
        <h2 className={styles.name}>{name}</h2>
        <small className={styles.description}>{description}</small>
      </div>
      <div className={styles.profileImageWrapper}>
        <div 
          className={styles.profileImage} 
          style={{backgroundImage: `url(${imgURL})`}}
        /> 
      </div>
      <button onClick={handleEditProject}>Edit</button>
    </div>
  );
};
  

export default ProfileCard;
