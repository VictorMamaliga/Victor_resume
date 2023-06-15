import { useEffect, useState } from "react";

export default function useApi() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api')
            .then(response => response.json())
            .then(response => setProjects(response))
            .catch(err => console.log(err));
    }, [])

    return { projects }
}