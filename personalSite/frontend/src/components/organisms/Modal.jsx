import styles from './Modal.module.scss';

const Modal = ({ isOpen, apiResponseStatus, children, onToggleModal, onApiResponseStatus }) => {

    const handleCloseAndResetModal = () => {
        onToggleModal();
        onApiResponseStatus();
    }

    console.log(apiResponseStatus, typeof apiResponseStatus)

    const displayRequestStatus = () => {
        switch (onApiResponseStatus) {
            case false: {
                return children;
            }
            case 200: {
                return <h1>Success</h1>
            }
            case 400: {
                return <h1>Error</h1>
            }
            // default: {
            //     return null
            // }
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={handleCloseAndResetModal}>Close</button>
                {apiResponseStatus == 200 && (<h1>Success</h1>)}
                {apiResponseStatus == 400 && (<h1>Error</h1>)}
                {!apiResponseStatus && (children)}
            </div>
        </div>
    );
}

export default Modal;
