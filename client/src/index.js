import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import store, { sagaRun } from "./store/_index";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    
    <BrowserRouter>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </BrowserRouter>


);



