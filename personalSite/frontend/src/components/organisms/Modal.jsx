import styles from './Modal.module.scss';

const Modal = ({ isOpen, children, onToggleModal, onApiResponseStatus }) => {

    const handleCloseAndResetModal = () => {
        onToggleModal();
        onApiResponseStatus();
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={handleCloseAndResetModal}>Close</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
