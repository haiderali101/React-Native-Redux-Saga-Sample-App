import { GET_FOOD_LIST } from '../ActionTypes'
import { put, takeLatest, call } from 'redux-saga/effects'
import API from '../../Services/baseApi'
import * as FoodListActions from './Actions'

function* fetchFoodData(action) {
  try {
    const response = yield call(API.get, '/food')
    yield put(FoodListActions.getFoodListSuccess(response))
  } catch (e) {
    yield put(FoodListActions.getFoodListError(e.message))
  }
}

export default function* root() {
  yield [yield takeLatest(GET_FOOD_LIST, fetchFoodData)]
}
