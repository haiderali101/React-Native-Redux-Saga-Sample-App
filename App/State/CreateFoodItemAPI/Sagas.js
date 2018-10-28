import { CREATE_FOOD_ITEM } from '../ActionTypes'
import { put, takeLatest, call } from 'redux-saga/effects'
import API from '../../Services/baseApi'
import * as CreateFoodActions from './Actions'

function* createFoodData(action) {
  try {
    const response = yield call(API.post, '/food', action.payload)
    yield put(CreateFoodActions.createFoodItemSuccess(response))
  } catch (e) {
    yield put(CreateFoodActions.createFoodItemError(e.message))
  }
}

export default function* root() {
  yield [yield takeLatest(CREATE_FOOD_ITEM, createFoodData)]
}
