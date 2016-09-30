import { takeEvery } from 'redux-saga';
import { fetchData } from 'system/utils/sagas/fetchData';
import * as constaints from '../system/SystemConstaints';


export function* draft() {
  yield* takeEvery('INITIAL_ACTION', fetchData);
}
