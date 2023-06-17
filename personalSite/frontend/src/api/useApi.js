import { useEffect, useState } from "react";

export default function useApi(data) {
    const [projectsAPI, setProjectsAPI] = useState([]);
    console.log('useApi: ', data)

    const createProject = e => {
        e.preventDefault();
        console.log(e)
    }
    
    // const createProject = e => {
    //     e.preventDefault();
    //     console.log('am editat un proiect')
    // }

    useEffect(() => {
        // fetch('http://localhost:8080/api')
        //     .then(response => response.json())
        //     .then(response => setProjects(response))
        //     .catch(err => console.log(err));
    }, [])

    return { projectsAPI, createProject }
}