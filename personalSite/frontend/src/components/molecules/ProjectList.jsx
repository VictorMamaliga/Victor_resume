import ProjectCard from "./ProjectCard";
import styles from './projectList.module.scss';

import { projects } from "../../helpers";

export default function ProjectList() {
    return (
        <section className={styles.list}>
            {projects.map(project => <ProjectCard key={project._id} name={project.name} job={project.description} imageUrl={project.image} />)}
        </section>
    );
}