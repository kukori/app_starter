import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import messageReducer from './message/message.reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    message: messageReducer,
});

export default persistReducer(persistConfig, rootReducer);
