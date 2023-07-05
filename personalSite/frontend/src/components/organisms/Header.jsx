import { useEffect, useRef } from 'react';

import styles from './header.module.scss';
import kittenImg from '../../assets/kitten.jpg';

export default function Header({onSidebarIsOpen}) {
    const headerRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > 150) {
            headerRef.current.style.backgroundColor = 'black';
            headerRef.current.style.padding = '2rem 0';
        } else {
            headerRef.current.style.backgroundColor = 'transparent';
            headerRef.current.style.padding = '1.5rem 0';
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={styles.header}>
            <div ref={headerRef} className={styles.headerTop}>
                <div className="container">
                    <a href="" className="name">Presentation</a>
                    <div className={styles.headerHamburger} onClick={onSidebarIsOpen}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div id='home' className={styles.headerWelcome}>
                <div className={styles.headerSplit}>
                    <h1>We are a fully integrated <span>Software development</span> tool</h1>
                </div>
                <div className={styles.headerSplit}>
                    <img src={kittenImg} alt='' />
                </div>
            </div>
            <div className={styles.headerDecorations}>
                <div>
                    <h3>01</h3>
                    <h4>Efficient Code Crafting</h4>
                    <p>Building Robust Software Solutions</p>
                </div>
                <div>
                    <h3>02</h3>
                    <h4>Innovation Unleashed</h4>
                    <p>Powering the Future with Software Development</p>
                </div>
                <div>
                    <h3>03</h3>
                    <h4>Seamless User Experiences</h4>
                    <p>Crafting Intuitive Software Interfaces</p>
                </div>
                <div>
                    <h3>04</h3>
                    <h4>Agile Development</h4>
                    <p>Adapting and Delivering Software at Speed</p>
                </div>
                <div>
                    <h3>05</h3>
                    <h4>Secure Solutions</h4>
                    <p>Building Trustworthy Software Systems</p>
                </div>
                <div>
                    <h3>06</h3>
                    <h4>Collaborative Development</h4>
                    <p>Uniting Teams for Successful Software</p>
                </div>
            </div>
        </header>
    );
}