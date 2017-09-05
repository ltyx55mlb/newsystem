// import { Dimensions } from 'react-native'
// import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
// import * as homeType from './duck'
// import { getBiao } from '../../services/user.api'
// import {chartconfiga} from './selectors'

// const SCREEN_WIDTH = Dimensions.get('window').width;

// function* loadChartsaga(action) {
//   const res = yield call(getBiao)
//   const charts = res.data
//   const option = {}
//   option.optionline = chartconfiga(charts,'line')
//   option.optionpie = chartconfiga(charts,'pie')
//   option.optionhuan =chartconfiga(charts,'huan')
//   yield put({
//     type: homeType.GET_CHARTS,
//     payload: option
//   })

// }


// export default function* rootChartSaga() {
//   yield all([
//     takeLatest(homeType.ON_CHARTS, loadChartsaga)
//   ])
// }