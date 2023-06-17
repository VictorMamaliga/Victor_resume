import { useEffect, useState } from "react";

export default function useApi(data) {
    const [projectsAPI, setProjectsAPI] = useState([]);
    console.log('useApi: ', data)

    const handleOnSubmitForm = e => {
        e.preventDefault();
        console.log(e)
    }

    useEffect(() => {
        // fetch('http://localhost:8080/api')
        //     .then(response => response.json())
        //     .then(response => setProjects(response))
        //     .catch(err => console.log(err));
    }, [])

    return { projectsAPI, handleOnSubmitForm }
}