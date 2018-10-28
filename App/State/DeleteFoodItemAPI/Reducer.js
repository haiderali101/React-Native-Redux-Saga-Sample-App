// @flow

import { DELETE_FOOD_ITEM, DELETE_FOOD_ITEM_SUCCESS, DELETE_FOOD_ITEM_ERROR } from '../ActionTypes'
import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  deleteFoodItemResponse: null,
  isFetching: false,
  error: null,
})

const reducers = {
  [DELETE_FOOD_ITEM]: (state, action) => {
    return Immutable.merge(state, { deleteFoodItemResponse: null, isFetching: true })
  },
  [DELETE_FOOD_ITEM_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, { deleteFoodItemResponse: data, isFetching: false, error: null })
  },
  [DELETE_FOOD_ITEM_ERROR]: (state, { error }) => {
    return Immutable.merge(state, { error, isFetching: false })
  },
}

export const reducer = createReducer(INITIAL_STATE, reducers)
