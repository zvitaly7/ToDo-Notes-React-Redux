import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.less'
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


serviceWorker.unregister();
