// @flow

import { GET_FOOD_ITEM, GET_FOOD_ITEM_SUCCESS, GET_FOOD_ITEM_ERROR } from '../ActionTypes'
import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  foodItemData: null,
  isFetching: false,
  error: null,
})

const reducers = {
  [GET_FOOD_ITEM]: (state, action) => {
    return Immutable.merge(state, { foodItemData: null, isFetching: true })
  },
  [GET_FOOD_ITEM_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, { foodItemData: data, isFetching: false, error: null })
  },
  [GET_FOOD_ITEM_ERROR]: (state, { error }) => {
    return Immutable.merge(state, { error, isFetching: false })
  },
}

export const reducer = createReducer(INITIAL_STATE, reducers)
