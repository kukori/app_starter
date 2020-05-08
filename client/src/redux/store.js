import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const initialState = {};

const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleWare))
);

export const persistor = persistStore(store);

// export default store;
export default {store, persistor};
