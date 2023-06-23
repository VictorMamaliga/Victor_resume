export const projects = [
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
const createURLType = 'http://localhost:3333/projects/create';
const deleteURLType = 'http://localhost:3333/projects/delete';

// api
export function formatJSONStructure(modalData, event) {
    if ( modalData.requestType !== 'delete') {
        const dataToSend = { body: { data: {} } };
        dataToSend.url = createURLType;
        // if (modalData.data?.id) dataToSend.body.id = modalData.data?.id;
        
        for (let item of event.target) {
            if (item.name) dataToSend.body.data[item.name] = item.value;
        }

        return dataToSend;
    } else {
        return { url: deleteURLType, body: { id: modalData.id }}
    }
}