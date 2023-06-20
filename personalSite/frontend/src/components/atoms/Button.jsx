import styles from './button.module.scss';

const Button = ({ text }) => {
  return (
    <button className={styles.button}>
      <div id='rssBlock'>
        <p className={styles.cnnContents}>
          <span className={styles.marqueeStyle}>continuous infinite text loop 1 continuous infinite text loop 2 </span>
          <span className={styles.marqueeStyle2}>continuous infinite text loop 3 continuous infinite text loop 4</span>
        </p>
      </div>
    </button>
  );
};

export default Button;
