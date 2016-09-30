import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import Root from '../../system/routes';


export default class App extends Component {

  render() {
    const { store } = this.props;

    return (
      <Provider store={store} key='provider'>
          {Root(store,browserHistory)}
      </Provider>
    );
  }
}
