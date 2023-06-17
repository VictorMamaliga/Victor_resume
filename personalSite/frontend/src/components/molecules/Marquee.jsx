import styles from './Marquee.module.scss';

const Marquee = ({ title1, title2, title3, word1, word2, word3, buttonImage }) => (
    <div>
        <div className={styles.title}>
            <span className={styles.titlePart1}>{title1}</span>
            <span className={styles.titlePart2}>{title2}</span>
            <span className={styles.titlePart3}>{title3}</span>
        </div>
        <div className={styles.marquee}>
            <div label="asdfs" className={styles['marquee-content']}>
                <span className={styles.word1}>{word1}</span>
                <span className={styles.word2}>{word2}</span>
                <span className={styles.word3}>{word3}</span>
            </div>
            <img src={buttonImage} alt="Hover image" className={styles['popup-image']}/>
        </div>
    </div>
);

export default Marquee;
