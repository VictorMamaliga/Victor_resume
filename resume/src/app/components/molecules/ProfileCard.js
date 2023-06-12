import styles from './ProfileCard.module.scss'

const ProfileCard = ({ name, job, imageUrl, order }) => {
    return (
      <div className={`${styles.profileCard} ${styles[order]}`}>
        <div className={styles.profileInfo}>
          <h2 className={styles.name}>{name}</h2>
          <small className={styles.job}>{job}</small>
        </div>
        <div className={styles.profileImageWrapper}>
          <div 
            className={styles.profileImage} 
            style={{backgroundImage: `url(${imageUrl})`}}
          /> 
        </div>
      </div>
    );
  };
  

export default ProfileCard;
