import styles from './button.module.scss'

const Button = ({ onClick, text }) => {
    return (
      <button className={styles.customButton} onClick={onClick}>
        <div className={styles.slideText}>
          <span>{text} </span>
          

          

         
        </div>
      </button>
    );
  };
  
  export default Button;