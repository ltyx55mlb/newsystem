import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import * as homeType from './duck'
import { getUsers } from '../../services/user.api'

function* loadListsaga(action){
  const res = yield call(getUsers)  
  const lists = res.data.data
  const newLists = lists.map(list =>{
    return({
      id:list.id,
      name:list.name,
      subtitle:list.subtitle,
      inprice:list.inprice,
      outprice:list.outprice,
      imageurl:list.imageurl
    })
  })
  yield put({
    type:homeType.GET_LISTS,
    payload:newLists
  })

}


export default function* rootListSaga() {
  yield all([
    takeLatest(homeType.ON_LISTS, loadListsaga)
  ])
}