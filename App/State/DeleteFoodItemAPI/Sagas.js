import { DELETE_FOOD_ITEM } from '../ActionTypes'
import { put, takeLatest, call } from 'redux-saga/effects'
import API from '../../Services/baseApi'
import * as FoodItemActions from './Actions'

function* deleteFoodItem(action) {
  try {
    const response = yield call(API.delete, '/food/' + action.foodId)
    yield put(FoodItemActions.deleteFoodItemSuccess(response))
  } catch (e) {
    yield put(FoodItemActions.deleteFoodItemError(e.message))
  }
}

export default function* root() {
  yield [yield takeLatest(DELETE_FOOD_ITEM, deleteFoodItem)]
}
