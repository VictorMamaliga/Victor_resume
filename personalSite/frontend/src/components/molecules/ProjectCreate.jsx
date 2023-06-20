import React, { useContext, useState } from 'react';

import styles from './projectCreate.module.scss';
import { ModalDataContext } from '../../contexts/ModalDataContext';

const ProjectCreate = ({ onToggleModal, onSubmitForm }) => {
    const modalData = useContext(ModalDataContext);
    const [formData, setFormData] = useState(modalData);

    const handleChange = event => {
        setFormData({
            ...formData,
            data: {[event.target.name]: event.target.value},
        });
    }

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
                        value={formData?.data?.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Description:
                    <input
                        type='text'
                        name='description'
                        value={formData?.data?.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Project Link:
                    <input
                        type='string'
                        name='redirrect'
                        value={formData?.data?.redirrect}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type='string'
                        name='imgURL'
                        value={formData?.data?.imgURL}
                        onChange={handleChange}
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
