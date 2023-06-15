import styles from './projectCard.module.scss';

const ProfileCard = ({ name, description, imageURL, redirrect, order }) => {
    return (
      <div className={`${styles.profileCard} ${styles[order]}`}>
        <div className={styles.profileInfo}>
          <h2 className={styles.name}>{name}</h2>
          <small className={styles.description}>{description}</small>
        </div>
        <div className={styles.profileImageWrapper}>
          <div 
            className={styles.profileImage} 
            style={{backgroundImage: `url(${imageURL})`}}
          /> 
        </div>
      </div>
    );
  };
  

export default ProfileCard;
