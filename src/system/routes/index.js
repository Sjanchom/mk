import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import RootApp from '../../components/containers/RootApp.js';

export default (store, history) => {

return(
        <Router history={syncHistoryWithStore(browserHistory, store)}>
            <Route path="/" component={RootApp}>

            </Route>
        </Router>
    );
};
