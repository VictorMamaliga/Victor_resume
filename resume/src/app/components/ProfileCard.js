import styles from './ProfileCard.module.scss'

const ProfileCard = ({ name, job, imageUrl, order }) => {
    return (
      <div className={`${styles.profileCard} ${styles[order]}`}>
        <div className={styles.profileInfo}>
          <div className={styles.name}>{name}</div>
          <div className={styles.job}>{job}</div>
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
