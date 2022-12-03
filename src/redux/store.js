import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlide';
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['authentication'],
};
const persistedReducer = persistReducer(persistConfig, authenticationReducer);

export default configureStore({
    reducer: {
        authentication: persistedReducer,
    },
    middleware: [thunk],
});
