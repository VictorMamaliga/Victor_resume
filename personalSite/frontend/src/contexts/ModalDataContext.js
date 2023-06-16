import { createContext } from "react";

export const ModalDataContext = createContext(null);
export const ModalDataDispatchContext = createContext(null);

export function modalDataReducer(project, action) {
    switch (action.type) {
        case 'create': {
            return null;
        }
        case 'edit': {
            return action.data;
        }    
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}