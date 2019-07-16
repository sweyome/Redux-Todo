import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from '../node_modules/react-redux';
import {createStore} from 'redux';
import {connect} from '../node_modules/react-redux';
import reducer from './reducers/reducers';


const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));


serviceWorker.unregister();