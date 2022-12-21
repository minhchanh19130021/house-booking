import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlide';
import avatarReducer from './avatarSlice';
import cartReducer from './cartSlice';
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'auth',
    storage,
    blacklist: ['authentication'],
};
const persistAvatarConfig = {
    key: 'avatar',
    storage,
    blacklist: ['avatar'],
};
const persistCartConfig = {
    key: 'cart',
    storage,
    blacklist: ['cart'],
};
const persistedReducer = persistReducer(persistConfig, authenticationReducer);
const persistedAvatarReducer = persistReducer(persistAvatarConfig, avatarReducer);
const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

export default configureStore({
    reducer: {
        authentication: persistedReducer,
        avatar: persistedAvatarReducer,
        cart: persistedCartReducer,
    },
    middleware: [thunk],
});
