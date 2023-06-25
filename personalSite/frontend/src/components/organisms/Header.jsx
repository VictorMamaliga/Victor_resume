import styles from './header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className='header-top-area'>
                <div className={styles.headerContainer}>
                    <a href="" className="name">George</a>
                    <div className={styles.headerHamburger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="welcome-image-area"></div>
        </header>
    );
}