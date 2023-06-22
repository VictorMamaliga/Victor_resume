import { Injectable } from '@nestjs/common';
import { db } from '../../firebase/config';

const projects = [
    {
        id: 'gdfi8jl58g',
        description: 'Numarul 1',
        imgURL: 'https://i.ytimg.com/vi/XelWZr_B7E4/maxresdefault.jpg',
        name: 'Nicolae Guta',
        redirrect: 'https://google.com'
    },
    {
        id: 'gdfi8jlfdfdf58g',
        description: 'E cel mai tarffe',
        imgURL: 'https://i.ytimg.com/vi/XelWZr_B7E4/maxresdefault.jpg',
        name: 'Adrian minuntxdfhxdf56456',
        redirrect: 'https://google.com'
    }
];

@Injectable()
export class ProjectsService {
    async getAll() {
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
            const projectsRef = db.collection('projects');
            projectsRef.add(body.data);
        } else {
            const projectRef = db.collection('projects').doc(body.id);
            projectRef.update(body.data)
        }
        return 'astae'
    }

    deleteProject(body) {
        db.collection('projects').doc(body.id).delete();
    }
}
