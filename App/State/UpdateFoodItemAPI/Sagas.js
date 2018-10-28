import { UPDATE_FOOD_ITEM } from '../ActionTypes'
import { put, takeLatest, call } from 'redux-saga/effects'
import API from '../../Services/baseApi'
import * as UpdateFoodActions from './Actions'

function* updateFoodData(action) {
  try {
    const response = yield call(API.post, '/food/' + action.foodId, action.payload)
    yield put(UpdateFoodActions.updateFoodItemSuccess(response))
  } catch (e) {
    yield put(UpdateFoodActions.updateFoodItemError(e.message))
  }
}

export default function* root() {
  yield [yield takeLatest(UPDATE_FOOD_ITEM, updateFoodData)]
}
