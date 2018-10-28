import { GET_FOOD_ITEM } from '../ActionTypes'
import { put, takeLatest, call } from 'redux-saga/effects'
import API from '../../Services/baseApi'
import * as FoodItemActions from './Actions'

function* getFoodItem(action) {
  try {
    const response = yield call(API.get, '/food/' + action.foodId)
    yield put(FoodItemActions.getFoodItemSuccess(response))
  } catch (e) {
    yield put(FoodItemActions.getFoodItemError(e.message))
  }
}

export default function* root() {
  yield [yield takeLatest(GET_FOOD_ITEM, getFoodItem)]
}
