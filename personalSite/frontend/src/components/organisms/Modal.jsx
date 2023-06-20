import styles from './Modal.module.scss';

const Modal = ({ isOpen, apiResponseStatus, children, onToggleModal }) => {
    return isOpen && (
        <div className={styles.modal}>
            <div>
                <button className={styles.modalClose} onClick={() => onToggleModal()}>X</button>
                {apiResponseStatus == 200 && (<h1>Success</h1>)}
                {apiResponseStatus == 400 && (<h1>Error</h1>)}
                {!apiResponseStatus && (children)}
            </div>
        </div>
    )
}

export default Modal;
