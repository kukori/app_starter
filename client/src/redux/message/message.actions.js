import { MessageActionTypes } from './message.types';

// RETURN MESSAGES
export const saveMessage = (message, type = MessageActionTypes.TYPE_ERROR) => {
    return {
        type: MessageActionTypes.ADD_MESSAGE,
        payload: { message, type }
    };
};

// CLEAR ERRORS
export const clearMessage = () => {
    return {
        type: MessageActionTypes.CLEAR_MESSAGE
    };
};