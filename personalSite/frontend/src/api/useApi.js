import { useEffect, useState } from "react";

import { formatJSONStructure, getProjectsURLType } from '../helpers';

export default function useApi(modalData, handleAutoModalClose) {
    const [projectsAPI, setProjectsAPI] = useState(null);
    const [apiResponseStatus, setApiResponseStatus] = useState(false);
    console.log(projectsAPI)

    const handleOnSubmitForm = e => {
        e.preventDefault();
        const dataToSend = formatJSONStructure(modalData, e);

        fetch(dataToSend.url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend.body)
        })
        .then(r => r.json())
        .then(r => {
            console.log(r)
            setProjectsAPI([...projectsAPI, r]);
            setApiResponseStatus(201);
            handleTimerModalClose()
        })
        .catch(r => console.log(r))

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