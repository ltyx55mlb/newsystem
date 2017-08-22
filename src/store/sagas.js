import { fork, all,takeEvery } from 'redux-saga/effects'

import rootListSaga from '../modules/List/saga'
// import rootMainSaga from '../modules/Main/saga'
// import rootImageSaga from '../modules/Imagelist/saga'
// import rootFormSaga from '../modules/Form/saga'

// 根 sagas ，页面汇总
export default function* rootSagas() {
  yield all([
    fork(rootListSaga),
    // fork(rootHomeSaga),
    // fork(rootImageSaga),
    // fork(rootFormSaga),
  ])
}
