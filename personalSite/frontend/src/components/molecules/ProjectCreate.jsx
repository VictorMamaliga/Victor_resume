import React, { useContext, useState } from 'react';

import styles from './projectCreate.module.scss';
import { ModalDataContext } from '../../contexts/ModalDataContext';

const ProjectCreate = ({ onToggleModal, onSubmitForm }) => {
    const modalData = useContext(ModalDataContext);

    return (
        modalData?.requestType === 'delete' ? (
            <div>
                <h1>Are you sure?</h1>
                <button onClick={onSubmitForm}>Yes</button>
                <button onClick={onToggleModal}>Cancel</button>
            </div>
        ) : (
            <form onSubmit={onSubmitForm} className={styles.form}>
                <label>
                    Name:
                    <input
                        type='text'
                        name='name'
                        defaultValue={modalData?.data?.name}
                        required
                    />
                </label>
                <br />
                <label>
                    Description:
                    <input
                        type='text'
                        name='description'
                        defaultValue={modalData?.data?.description}
                        required
                    />
                </label>
                <br />
                <label>
                    Project Link:
                    <input
                        type='string'
                        name='redirrect'
                        defaultValue={modalData?.data?.redirrect}
                        required
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type='string'
                        name='imgURL'
                        defaultValue={modalData?.data?.imgURL}
                        required
                    />
                </label>
                <br />
                <button type='submit'>Submit</button>
            </form>

        )
    );
}

export default ProjectCreate;
