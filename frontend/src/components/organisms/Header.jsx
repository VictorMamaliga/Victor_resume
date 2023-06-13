import styles from './header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.headerName}>
                    <a>Gutan Bregovih</a>
                    <small>INTERPRET PRE/POST INTERBELIC TALENT</small>
                </div>
                <div>
                    <ul>
                        <li><a>accenti,</a></li>
                        <li><a>capatos,</a></li>
                        <li><a>mustati</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}