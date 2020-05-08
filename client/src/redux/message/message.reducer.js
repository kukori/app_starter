import { MessageActionTypes } from './message.types';

const initialState = {
  message: null,
  messageType: null
}

const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case MessageActionTypes.ADD_MESSAGE:
      return {
        message: action.payload.message,
        messageType: action.payload.type
      };
    case MessageActionTypes.CLEAR_MESSAGE:
      return {
        message: null,
        messageType: null
      };
    default:
      return state;
  }
}

export default messageReducer;