import { useEffect, useState } from "react";

import { formatJSONStructure, getProjectsURLType } from '../helpers';

export default function useApi(modalData, handleAutoModalClose) {
    const [projectsAPI, setProjectsAPI] = useState([]);
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
        }).then(r => {
            console.log(r, r.status)
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
        fetch(getProjectsURLType)
            .then(response => response.json())
            .then(response => {
                const packedData = [];

                while (response.length) {
                    packedData.push(response.splice(0, 2))
                }
                setProjectsAPI(packedData)
            })
            .catch(err => console.log(err));
    }, [apiResponseStatus])

    return { projectsAPI, apiResponseStatus, handleOnSubmitForm, handleApiResponseStatus }
}