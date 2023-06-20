import styles from './header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.headerName}>
                    <a>Gutan Bregovih</a>
                    <span>INTERPRET PRE/POST INTERBELIC TALENT</span>
                </div>
                <div>
                    <ul>
                        <li><a href='#first'>accenti,</a></li>
                        <li><a href='#second'>capatos,</a></li>
                        <li><a href='#third'>mustati</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}