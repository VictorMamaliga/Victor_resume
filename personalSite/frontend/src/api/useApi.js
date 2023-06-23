import { useEffect, useState } from "react";

import { formatJSONStructure, getProjectsURLType } from '../helpers';

export default function useApi(modalData, handleAutoModalClose) {
    const [projectsAPI, setProjectsAPI] = useState(null);
    const [apiResponseStatus, setApiResponseStatus] = useState(false);
    console.log(modalData)

    const handleOnSubmitForm = async e => {
        e.preventDefault();
        const dataToSend = formatJSONStructure(modalData, e);

        // fetch(dataToSend.url, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(dataToSend.body)
        // })
        // .then(r => r.json())
        // .then(r => {
        //     console.log(r)
        //     setProjectsAPI([...projectsAPI, r]);
        //     setApiResponseStatus(201);
        //     handleTimerModalClose()
        // })
        // .catch(r => console.log(r))
        
        const george = await fetch(`http://localhost:3333/projects/delete/${modalData.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        console.log(george);
        const georgeJson = await george.json();
        console.log(georgeJson)
        // .then(res => {
        //     console.log(res);
        //     res.json()
        // }).then(res => {
        //     console.log(res)
        //     // const newList = projectsAPI.filter(e => e.id !== res.id);
        //     // setApiResponseStatus(201);
        //     // setProjectsAPI(newList);
        //     // handleTimerModalClose();
        // }).catch(er => console.log(er))

        // fetch(`http://localhost:3333/projects/${modalData.data.id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(dataToSend.body.data)
        // })
        // .then(res => res.json())
        // .then(res => {
        //     console.log(res)
        //     const newList = projectsAPI.map(el => {
        //         if (el.id === modalData.data.id) {
        //             return { ...res }
        //         } else {
        //             return el
        //         }
        //     });

        //     setProjectsAPI(newList);
        //     setApiResponseStatus(201);
        //     handleTimerModalClose();
        // })
        // .catch(err => console.log(err))

    }
    
    function handleTimerModalClose() {
        setTimeout(() => {
            handleAutoModalClose();
            setApiResponseStatus(false);
        }, 1500)
    }

    const handleApiResponseStatus = () => {
        setApiResponseStatus(false);
    }

    useEffect(() => {
        fetch(getProjectsURLType)
            .then(response => response.json())
            .then(response => setProjectsAPI(response))
            .catch(err => console.log(err))
    }, [])

    return { projectsAPI, apiResponseStatus, handleOnSubmitForm, handleApiResponseStatus }
}