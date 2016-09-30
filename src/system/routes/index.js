import React from 'react';
import { Route, IndexRoute } from 'react-router';


import RootApp from '../../components/containers/RootApp.js';


export default ({ dispatch, getState }) => {


  return (
    <Route path="/" component={RootApp}>

    </Route>
  );
};
