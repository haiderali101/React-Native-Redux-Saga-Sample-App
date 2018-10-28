// @flow

import { CREATE_FOOD_ITEM, CREATE_FOOD_ITEM_SUCCESS, CREATE_FOOD_ITEM_ERROR } from '../ActionTypes'
import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  foodData: null,
  isFetching: false,
  error: null,
})

const reducers = {
  [CREATE_FOOD_ITEM]: (state, action) => {
    return Immutable.merge(state, { foodData: null, isFetching: true })
  },
  [CREATE_FOOD_ITEM_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, { foodData: data, isFetching: false, error: null })
  },
  [CREATE_FOOD_ITEM_ERROR]: (state, { error }) => {
    return Immutable.merge(state, { error, isFetching: false })
  },
}

export const reducer = createReducer(INITIAL_STATE, reducers)
