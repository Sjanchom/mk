import { put, call } from 'redux-saga/effects';

import requestAPI from '../request';


export function* fetchData(action) {

  const { type, request, callback,modalType } = action;
if (request) {

  yield put({type: `${type}_REQUEST`});

  const { data, error } = yield call(requestAPI, request.path, request.options);

  if (data) {
  
    yield put({
      type: `${type}_SUCCESS`,
      data
    });
    if (callback) {
      const action = callback(data);
      yield call(fetchData, action);
    }
  } else {
    yield put({
      type: `${type}_FAILED`,
      error
    });
  }
}



}
