// Modal.jsx
import styles from './Modal.module.scss';

const Modal = ({ isOpen, children, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
