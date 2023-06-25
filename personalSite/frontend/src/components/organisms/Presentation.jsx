import styles from './presentation.module.scss';
import { useEffect, useRef } from 'react';

export default function Presentation() {
    const posterRef = useRef(null);
    const sectionRef = useRef(null);

    const handleScroll = () => {
        const documentHeight = document.body.scrollHeight;
        const secondPhase = documentHeight - 2 * posterRef.current.getBoundingClientRect().height;
        const zero = window.scrollY + 2 * posterRef.current.getBoundingClientRect().height - documentHeight;

        if (window.scrollY <= posterRef.current.getBoundingClientRect().height) {
            posterRef.current.style.opacity = 1 - window.scrollY / posterRef.current.getBoundingClientRect().height;
        } else if (window.scrollY >= secondPhase) {
            posterRef.current.style.opacity = zero / posterRef.current.getBoundingClientRect().height;
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <section ref={sectionRef} id='first'>
                <div className={styles.wrapper}>
                    <h1 className={styles.wrapperAvailable}>
                        26<span>July <br /> available <br /> for work</span>
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
            <div ref={posterRef} id='poster' className="posterWraper">
            </div>
        </>
    );
}