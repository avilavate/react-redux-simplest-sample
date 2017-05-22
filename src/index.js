import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { App } from './components/App.jsx';
import {Printer} from './components/Printer.jsx';

import './index.css';

ReactDOM.render(
    <div>
        <App />
        <Printer />
    </div>, document.getElementById('root'));
registerServiceWorker();
