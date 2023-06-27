import { useEffect, useRef } from 'react';
import styles from './header.module.scss';
import leatherImg from '../../assets/leather.jpg';

export default function Header({onSidebarIsOpen}) {
    const headerRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > 100) {
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
                <div className={styles.headerContainer}>
                    <a href="" className="name">George</a>
                    <div className={styles.headerHamburger} onClick={onSidebarIsOpen}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.headerWelcome}>
                <img src={leatherImg} alt='' />
                <h2>george Ionita</h2>
                <span>I design minimal websites</span>
            </div>
        </header>
    );
}