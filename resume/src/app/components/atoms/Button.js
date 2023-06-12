import styles from './button.module.scss'

const Button = ({ onClick, text }) => {
    return (
      <button className={styles.customButton} onClick={onClick}>
        <div className={styles.slideText}>
          <h3>{text} </h3>
          

          

         
        </div>
      </button>
    );
  };
  
  export default Button;