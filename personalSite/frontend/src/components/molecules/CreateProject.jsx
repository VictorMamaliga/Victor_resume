import React, { useState } from 'react';
import styles from './createProject.module.scss';

const SubmitProject = () => {
    const [project, setProject] = useState({
        name: '',
        description: '',
        link: ''
    });

    const handleChange = (event) => {
        setProject({
            ...project,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // You should put your project submission API or function here.
        console.log('Submitted:', project);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Project Name:
                <input
                    type='text'
                    name='name'
                    value={project.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
            </label>
            <br />
            <label>
                Project Description:
                <textarea
                    name='description'
                    value={project.description}
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
                    name='link'
                    value={project.link}
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
