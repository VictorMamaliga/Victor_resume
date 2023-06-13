import styles from './button.module.scss';

const Button = ({ text }) => {
    return (
      <button className={styles.button}>
        <div className={styles.buttonSlider}>
          <h3>{text} </h3>
        </div>
      </button>
    );
  };
  
  export default Button;
