import { useEffect, useState } from "react";

import { formatJSONStructure } from '../helpers';

export default function useApi(modalData, handleAutoModalClose) {
    const [projectsAPI, setProjectsAPI] = useState([]);
    const [apiResponseStatus, setApiResponseStatus] = useState(false);

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
        }).then(r => {
            setApiResponseStatus(r.status);
            handleTimerModalClose()
        }).catch(r => console.log(r.status))
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
        fetch('http://localhost:8080/api')
            .then(response => response.json())
            .then(response => setProjectsAPI(response))
            .catch(err => console.log(err));
    }, [apiResponseStatus])

    return { projectsAPI, apiResponseStatus, handleOnSubmitForm, handleApiResponseStatus }
}