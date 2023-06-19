import styles from './Marquee.module.scss';

const MarqueeList = ({ title1, title2, title3, word1, word2, word3, buttonImage }) => (
  <div className={styles.marqueeWrapper}>
    <div className={styles.title}>
      <h3 className={styles.titlePart1}>{title1}</h3>
      <h3 className={styles.titlePart2}>{title2}</h3>
      <h3 className={styles.titlePart3}>{title3}</h3>
    </div>
    <div className={styles.names}>
      <h5 className={styles.word1}>{word1}</h5>
      <h5 className={styles.word2}>{word2}</h5>
      <h5 className={styles.word3}>{word3}</h5>
    </div>
    <div className={styles.marquee}>
      <div className={styles['marquee-content']}>
        {word1}{word1}{word1}{word1}{word1}{word1}{word1}
      </div>
      <img src={buttonImage} alt="Hover image" className={styles['popup-image']} />
    </div>
  </div>
);


export default MarqueeList;
