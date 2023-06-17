import React, { useContext, useState } from 'react';

import styles from './projectCreate.module.scss';
import { ModalDataContext } from '../../contexts/ModalDataContext';

const ProjectCreate = ({ onToggleModal, onSubmitForm }) => {
    const modalData = useContext(ModalDataContext);
    const [formData, setFormData] = useState(modalData)

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    // const handleDeleteConfirm = () => {
    //     fetch('http://localhost:8080/api/posts/delete', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({ id: modalData.id })
    //     })
    //     .then(r => r.json()).then(r => console.log(r))
    //     console.log('confirm delete project with id:'+ modalData.id)
    //     onToggleModal();
    // }

    console.log(modalData)

    const handleSubmit = event => {
        event.preventDefault();



        // const canCLose = false;
        // const projectRef = {};

        // cred ca deja ai datale in "project"
        // for (let item of event.target) {
        //     if (item.name) projectRef[item.name] = item.value;
        // }

        // if (modalData.requestType === 'edit') {
        //     console.log('facem editare pe baza de date cu id: '+ modalData.data.id)
        // }

        // if (modalData.requestType === 'create') {
        //     console.log('facem create in baza de date cu: ',projectRef)
            
            // fetch('http://localhost:8080/api/posts', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(projectRef)
            // })
        //     onToggleModal();
        // }


        // if (canCLose) onToggleModal();
    }

    return (
        modalData?.requestType === 'delete' ? (
            <div>
                <h1>Are you sure?</h1>
                <button onClick={handleDeleteConfirm}>Yes</button>
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
                        className={styles.input}
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
                        className={styles.input}
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
                        className={styles.input}
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
                        className={styles.input}
                    />
                </label>
                <br />
                <button type='submit' className={styles.button}>Submit Project</button>
            </form>

        )
    );
}

export default ProjectCreate;
