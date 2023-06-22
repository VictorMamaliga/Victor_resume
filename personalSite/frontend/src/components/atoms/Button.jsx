import styles from './button.module.scss';

const Button = ({ buttonText, href }) => {
  const text = Array(10).fill(buttonText).join(' ');

  return (
    <a href={href} target="_blank" >
      <button>
        <div className={styles.scroll}>
          <div className={styles.mscroll}>
            <span>{text}</span>
          </div>
        </div>
      </button>
    </a>
  );
};

export default Button;
