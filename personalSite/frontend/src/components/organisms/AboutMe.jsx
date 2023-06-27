import styles from './aboutMe.module.scss';
import portraitImg from '../../assets/portrait.jpg';

export default function AboutMe() {
    return (
        <section className={styles.aboutme}>
            <div className="container">
                <div className={styles.aboutmeContent}>
                    <small className="about">About me</small>
                    <h3 className="Title">Lets do something fun together</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Incidunt quasi eos accusamus nostrum! Non assumenda adipisci quae, culpa 
                    numquam tenetur consequuntur ex itaque magni a nobis, sunt ratione distinctio 
                    voluptate!</p>
                </div>
                <div className={styles.aboutmeImage}>
                    <img src={portraitImg} alt="" />
                </div>
            </div>
        </section>
    );
}