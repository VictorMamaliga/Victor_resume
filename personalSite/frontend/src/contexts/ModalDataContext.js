import { createContext } from "react";

export const ModalDataContext = createContext(null);
export const ModalDataDispatchContext = createContext(null);

export function modalDataReducer(project, action) {
    switch (action.type) {
        case 'view': {
            return { requestType: action.type, data: action.data }
        }
        case 'create': {
            return { requestType: action.type };
        }
        case 'edit': {
            return { requestType: action.type, data: action.data };
        }
        case 'delete': {
            return { requestType: action.type, id: action.id };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}