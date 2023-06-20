import styles from './ending.module.scss';

export default function Ending() {
    return (
        <section id='third'>
            <div className={styles.ending}>
                <div className={styles.endingLinks}>
                    <h3>Titlu</h3>
                    <div className={styles.endingRowWrapper}>
                        <div className={styles.endingRow}>
                            <h3>ceva</h3>
                            <h3>ceva</h3>
                            <h3>ceva</h3>
                        </div>
                        <div className={styles.endingRow}>
                            <h3>Altceva</h3>
                            <h3>Altceva</h3>
                            <h3>Altceva</h3>
                        </div>
                        <div className={styles.endingRow}>
                            <h3>Nimic</h3>
                            <h3>Nimic</h3>
                            <h3>Nimic</h3>
                        </div>
                        <div className={styles.endingRow}>
                            <h3>Nifdfsdfmic</h3>
                            <h3>Nimdfgdfgic</h3>
                            <h3>Ni dfgdfgd fg dfgmic</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.endingFooter}>
                    <h1>Let's connect</h1>
                    <footer>
                        <ul>
                            <li>
                                <h3>Bacalaureat</h3>
                            </li>
                            <li>
                                <h3>Restaurante</h3>
                            </li>
                            <li>
                                <h3>Schimb valutar</h3>
                            </li>
                            <li>
                                <h3>Versuri</h3>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div>
        </section>
    );
}