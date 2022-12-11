import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from '~/components/GlobalStyles/GlobalStyle';
import './assets/css/responsive.css';
import { Provider } from 'react-redux';
import store from '~/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { SearchContextProvider } from './context/SearchContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <SearchContextProvider>
                <GoogleOAuthProvider clientId="579552701437-98rmrd5c0n7d4hac8ibuscs54udmrnt9.apps.googleusercontent.com">
                    <App />
                </GoogleOAuthProvider>
            </SearchContextProvider>
        </PersistGate>
    </Provider>,
);

reportWebVitals();
