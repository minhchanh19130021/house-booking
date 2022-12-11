import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlide';
import avatarReducer from './avatarSlice';
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['authentication'],
};
const persistAvatarConfig = {
    key: 'avatar',
    storage,
    blacklist: ['avatar'],
};
const persistedReducer = persistReducer(persistConfig, authenticationReducer);
const persistedAvatarReducer = persistReducer(persistAvatarConfig, avatarReducer);

export default configureStore({
    reducer: {
        authentication: persistedReducer,
        avatar: persistedAvatarReducer,
    },
    middleware: [thunk],
});
