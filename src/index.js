import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { App } from './components/App.jsx';
import {PrinterContainer} from './components/PrinterContainer.jsx';

import './index.css';

ReactDOM.render(
    <div>
        <App />
        <PrinterContainer />
    </div>, document.getElementById('root'));
registerServiceWorker();
