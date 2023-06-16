import { createContext } from "react";

export const ModalDataContext = createContext(null);
export const ModalDataDispatchContext = createContext(null);

export function modalDataReducer(project, action) {
    switch (action.type) {
        case 'create': {
            return { requestType: action.type };
        }
        case 'edit': {
            return { requestType: action.type, data: action.data };
        }
        case 'delete': {
            return { requestType: action.type };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}