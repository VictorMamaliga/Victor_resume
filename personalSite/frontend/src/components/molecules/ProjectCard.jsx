import React, { useContext, useState } from 'react';

import styles from './projectCard.module.scss';
import { ModalDataContext } from '../../contexts/ModalDataContext';

const ProjectCard = ({ onToggleModal, onSubmitForm }) => {
    const modalData = useContext(ModalDataContext);

    return (
        modalData?.requestType === 'delete' ? (
            <div>
                <h1>Are you sure?</h1>
                <button onClick={onSubmitForm}>Yes</button>
                <button onClick={onToggleModal}>Cancel</button>
            </div>
        ) : (
            <div className={styles.card}>
                <div className={styles.cardWrapper}>
                    <img src={modalData?.data?.imgURL} />
                </div>
                <div className={styles.cardDetails}>
                    <h3>George Ionita</h3>
                    <div>
                        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet corporis laudantium nostrum earum error magni voluptate eaque maiores, velit libero?</h4>
                    </div>
                </div>









                {/* <form onSubmit={onSubmitForm} className={styles.form}>
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
                </form> */}
            </div>

        )
    );
}

export default ProjectCard;
