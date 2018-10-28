// @flow

import { UPDATE_FOOD_ITEM, UPDATE_FOOD_ITEM_SUCCESS, UPDATE_FOOD_ITEM_ERROR } from '../ActionTypes'
import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  updateFoodDataResponse: null,
  isFetching: false,
  error: null,
})

const reducers = {
  [UPDATE_FOOD_ITEM]: (state, action) => {
    return Immutable.merge(state, { updateFoodDataResponse: null, isFetching: true })
  },
  [UPDATE_FOOD_ITEM_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, { updateFoodDataResponse: data, isFetching: false, error: null })
  },
  [UPDATE_FOOD_ITEM_ERROR]: (state, { error }) => {
    return Immutable.merge(state, { error, isFetching: false })
  },
}

export const reducer = createReducer(INITIAL_STATE, reducers)
