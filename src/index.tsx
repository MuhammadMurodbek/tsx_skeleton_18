import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from "./widgets/styles/global.style"

const container: any = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);

reportWebVitals();