import ProjectCard from "./ProjectCard";
import styles from './projectList.module.scss';

export default function ProjectList({ data }) {
    return (
        <section className={styles.list}>
            {data.map(project => <ProjectCard key={project.id} name={project.data.name} description={project.data.description} imageURL={project.data.imgURL} redirrect={project.data.redirrect} />)}
        </section>
    );
}