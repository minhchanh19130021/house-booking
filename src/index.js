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

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </PersistGate>
    </Provider>,
);

reportWebVitals();
