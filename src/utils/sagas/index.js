import * as actionsWatchers from '../../actions/watchers';


export default function* rootSaga() {

  let watchers = [];
  let mergedWatchers = {
    ...actionsWatchers
  };

  for (let watcher in mergedWatchers) {
    watchers.push(mergedWatchers[watcher]());
  }

  yield watchers;
}
