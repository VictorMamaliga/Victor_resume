import { useEffect, useState } from "react";

const createURL = 'http://localhost:8080/api/posts';
const editURL = 'http://localhost:8080/api/posts/edit';
const deleteURL = 'http://localhost:8080/api/posts/delete';

export default function useApi(modalData) {
    const [projectsAPI, setProjectsAPI] = useState([]);

    const createProject = e => {
        e.preventDefault();
        const dataToSend = {};
        
        switch (modalData.requestType) {
            
            case 'create': {
                dataToSend.url = createURL;
                const handle = {};
                
                for (let item of e.target) {
                    if (item.name) handle[item.name] = item.value;
                }
                dataToSend.body = handle;
                break;
            }
            case 'edit': {
                dataToSend.url = editURL;
                dataToSend.body = {};
                dataToSend.body.id = modalData.data.id;
                const handle = {};
                
                for (let item of e.target) {
                    if (item.name) handle[item.name] = item.value;
                }

                dataToSend.body.data = handle;
                break;
            }
            case 'delete': {
                dataToSend.url = deleteURL;
                dataToSend.body = { id: modalData.id };
                break;
            }
        }
        

        // fetch(dataToSend.url, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(dataToSend.body)
        // })



    }

    // useEffect(() => {
    //     fetch('http://localhost:8080/api')
    //         .then(response => response.json())
    //         .then(response => setProjectsAPI(response))
    //         .catch(err => console.log(err));
    // }, [])

    return { projectsAPI, createProject }
}