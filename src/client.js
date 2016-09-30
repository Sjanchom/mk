import React from 'react';
import { render } from 'react-dom';
import rootSaga from './system/utils/sagas';
import configureStore from './store/createStore';
import { AppContainer } from 'react-hot-loader';
import RootProvider from './system/provider';

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);
const {pathname, search, hash} = window.location;
const dest = document.getElementById('root-lampbox');


render(
    <AppContainer>
      <RootProvider   store={ store } />
    </AppContainer>, dest);


if (module.hot) {
  module.hot.accept('./system/provider', () => {
    const RootContainer = require('./system/provider').default;
    render(
        <AppContainer>
          <RootContainer store={ store } />
        </AppContainer>, dest);
  });
}
