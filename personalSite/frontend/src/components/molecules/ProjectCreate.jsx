import React, { useContext, useState } from 'react';
import styles from './projectCreate.module.scss';
import { ModalDataContext } from '../../contexts/ModalDataContext';

const SubmitProject = () => {
    const projectData = useContext(ModalDataContext);
    const [project, setProject] = useState(projectData);

    const handleChange = event => {
        setProject({
            ...project,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        // You should put your project submission API or function here.
        console.log('Submitted:', project);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    value={project?.name}
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
                    value={project?.description}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </label>
            <br />
            <label>
                Project Link:
                <input
                    type='url'
                    name='redirrect'
                    value={project?.redirrect}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </label>
            <label>
                Image URL:
                <input
                    type='url'
                    name='imgURL'
                    value={project?.imgURL}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </label>
            <br />
            <button type='submit' className={styles.button}>Submit Project</button>
        </form>
    );
}

export default SubmitProject;
