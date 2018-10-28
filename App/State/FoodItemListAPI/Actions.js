import * as ActionTypes from '../ActionTypes'

export const getFoodList = () => ({
  type: ActionTypes.GET_FOOD_LIST,
})

export const getFoodListSuccess = data => ({
  type: ActionTypes.GET_FOOD_LIST_SUCCESS,
  data,
})

export const getFoodListError = error => ({
  type: ActionTypes.GET_FOOD_LIST_ERROR,
  error,
})
