import styles from './sidebar.module.scss';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <span>X</span>
            <ul>
                <li><a href="">Mancare</a></li>
                <li><a href="">Bautura</a></li>
                <li><a href="">Tigari</a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </div>
    );
}