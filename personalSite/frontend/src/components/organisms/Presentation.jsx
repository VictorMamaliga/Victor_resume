import styles from './presentation.module.scss';
import starImg from '../../assets/star.png';

export default function Presentation() {
    return (
        <section id='first'>
            <div className={styles.wrapper}>
                <h1 className={styles.wrapperAvailable}>
                    <img src={starImg} />26
                    <span>July <br /> available <br /> for work</span>
                </h1>
                <div className={styles.wrapperDetails}>
                    <div className={styles.wrapperDetailsHero}>
                        <h1>Software Development</h1>
                    </div>
                    <div className={styles.wrapperDetailsDescription}>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas perferendis totam quis quasi harum earum doloribus? 
                            Magni ipsum voluptatibus, qui quas corporis rem assumenda sapiente consequatur, 
                            fugit vero id? Magnam.
                        </h3>
                        <button>Contact</button>
                    </div>
                </div>
            </div>
        </section>
    );
}