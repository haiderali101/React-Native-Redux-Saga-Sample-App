import * as ActionTypes from '../ActionTypes'

export const createFoodItem = payloadData => ({
  type: ActionTypes.CREATE_FOOD_ITEM,
  payload: payloadData,
})

export const createFoodItemSuccess = data => ({
  type: ActionTypes.CREATE_FOOD_ITEM_SUCCESS,
  data,
})

export const createFoodItemError = error => ({
  type: ActionTypes.CREATE_FOOD_ITEM_ERROR,
  error,
})
