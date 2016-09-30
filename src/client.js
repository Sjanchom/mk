import React from 'react';
import ReactDOM from 'react-dom';
import getRoutes from './system/routes';
import {browserHistory, Router} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootSaga from './system/utils/sagas';
import configureStore from './store/createStore';

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

const history = syncHistoryWithStore(browserHistory, store);

const routes = getRoutes(store);

//localion path
const {pathname, search, hash} = window.location;

const Root = <Router routes={routes} history={history}/>;
const dest = document.getElementById('root-lampbox');
ReactDOM.render(
    <Provider store={store} key="provider">
    {Root}
    </Provider>, dest);
