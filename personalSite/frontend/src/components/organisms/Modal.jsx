import styles from './Modal.module.scss';

const Modal = ({ isOpen, children, onToggleModal }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onToggleModal}>Close</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
