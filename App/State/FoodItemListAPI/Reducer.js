// @flow

import { GET_FOOD_LIST, GET_FOOD_LIST_SUCCESS, GET_FOOD_LIST_ERROR } from '../ActionTypes'
import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'

const INITIAL_STATE = Immutable({
  foodListData: null,
  isFetching: false,
  error: null,
})

const reducers = {
  [GET_FOOD_LIST]: (state, action) => {
    return Immutable.merge(state, { foodListData: null, isFetching: true })
  },
  [GET_FOOD_LIST_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, { foodListData: data, isFetching: false, error: null })
  },
  [GET_FOOD_LIST_ERROR]: (state, { error }) => {
    return Immutable.merge(state, { error, isFetching: false })
  },
}

export const reducer = createReducer(INITIAL_STATE, reducers)
