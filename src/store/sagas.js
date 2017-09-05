import { fork, all,takeEvery } from 'redux-saga/effects'

import rootListSaga from '../modules/List/saga'
// import rootChartSaga from '../modules/Charts/saga'
// import rootChartSaga from '../modules/Imagelist/saga'
// import rootFormSaga from '../modules/Form/saga'

// 根 sagas ，页面汇总
export default function* rootSagas() {
  yield all([
    fork(rootListSaga),
    // fork(rootChartSaga),
    // fork(rootImageSaga),
    // fork(rootFormSaga),
  ])
}
