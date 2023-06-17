import { useEffect, useState } from "react";

const createURL = 'http://localhost:8080/api/posts';
const deleteURL = 'http://localhost:8080/api/posts/delete';

export default function useApi(modalData) {
    const [projectsAPI, setProjectsAPI] = useState([]);

    const createProject = e => {
        e.preventDefault();
        const dataToSend = {};
        console.log(e)
        
        switch (modalData.requestType) {
            case 'edit': {
                dataToSend.url = createURL;
                // dataToSend.body = projectData;
                break;
            }
            case 'delete': {
                dataToSend.url = deleteURL;
                // dataToSend.body = projectData.data.id;
                break;
            }
        }
        
        console.log(dataToSend)



        // fetch(dataToSend.url, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(dataToSend.body)
        // })
    }
    const editProject = e => {
        e.preventDefault();
        console.log(e, modalData)
    }
    const deleteProject = e => {
        e.preventDefault();
        console.log(e)
    }

    useEffect(() => {
        fetch('http://localhost:8080/api')
            .then(response => response.json())
            .then(response => setProjectsAPI(response))
            .catch(err => console.log(err));
    }, [])

    return { projectsAPI, createProject, editProject, deleteProject }
}