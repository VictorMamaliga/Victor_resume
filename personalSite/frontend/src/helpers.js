export const projectsDummy = [
    {
        id: 'gdfi8jl58g',
        description: 'Numarul 1',
        imgURL: 'https://i.ytimg.com/vi/XelWZr_B7E4/maxresdefault.jpg',
        name: 'Nicolae Guta',
        redirrect: 'https://google.com'
    },
    {
        id: 'gdfi8jlfdfdf58g',
        description: 'E cel mai tare',
        imgURL: 'https://i.ytimg.com/vi/XelWZr_B7E4/maxresdefault.jpg',
        name: 'Adrian minunt',
        redirrect: 'https://google.com'
    }
];

// types
export const getProjectsURLType = 'http://localhost:3333/projects';
export const viewType = 'view';
export const createType = 'create';
export const editType = 'edit';
export const visibilityType = 'visibility';
export const deleteType = 'delete';
const createURLType = 'http://localhost:3333/projects/create';
const editURLType = 'http://localhost:3333/projects/';
const visibilityURLType = 'http://localhost:3333/projects/visibility/';
const deleteURLType = 'http://localhost:3333/projects/delete/';
const POSTType = 'POST';
const PUTType = 'PUT';
const DELETEType = 'DELETE';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

export function fetcher(modalData, event) {
    let body = {};
    let method, URL;

    console.log(modalData)

    if (modalData.requestType === createType || modalData.requestType === editType) {
        console.log(modalData.requestType, 'am intrat sefu')
        for (let item of event.target) {
            if (item.name && item.name !== 'isVisible') body[item.name] = item.value;
            if (item.name === 'isVisible') body.isVisible = item.checked;
        }
    }

    switch (modalData.requestType) {
        case createType: {
            console.log(1)
            method = POSTType;
            URL = createURLType;
            break;
        }
        case editType: {
            console.log(12)
            method = PUTType;
            URL = editURLType + modalData.data.id;
            break;
        }
        case deleteType: {
            console.log(13)
            method = DELETEType;
            URL = deleteURLType + modalData.id;
            break;
        }
        case visibilityType: {
            console.log(14)
            method = PUTType;
            URL = visibilityURLType + modalData.data.id;
            body = { visibility: modalData.data.isVisible }
            break;
        }
    }

    console.log(body)

    return fetch(URL, {
        method,
        headers,
        body: JSON.stringify(body),
    })
}
