import { Injectable } from '@nestjs/common';
import { db } from '../../firebase/config';

@Injectable()
export class ProjectsService {
    async getAllProjects() {
        const projectsRef = db.collection('projects');
        const snapshot = await projectsRef.get();
        const result = [];

        snapshot.forEach(doc => {
            result.push({id: doc.id, ...doc.data()})
        })

        return result;
    }

    async createProject(body) {
        console.log(body)

        
        if (!body.id) {
            const project = await db.collection('projects').add(body.data);

            const projectRef = db.collection('projects').doc(project.id);
            const doc = await projectRef.get();

            return { ...doc.data(), id: project.id };
        } else {
            const projectRef = db.collection('projects').doc(body.id);
            projectRef.update(body.data)
        }
    }

    async deleteProject(body) {
        // db.collection('projects').doc(body.id).delete();
        const res = await db.collection('projects').doc(body.id).delete();
        console.log(res.id)
        return res.id;
    }
}
