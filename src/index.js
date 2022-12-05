import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from '~/components/GlobalStyles/GlobalStyle';
import { SearchContextProvider } from "./context/SearchContext";
import './assets/css/responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle>
            <SearchContextProvider>
                <App />
            </SearchContextProvider>
        </GlobalStyle>
    </React.StrictMode>,
);

reportWebVitals();
