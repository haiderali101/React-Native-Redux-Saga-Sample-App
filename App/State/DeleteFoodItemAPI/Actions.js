import * as ActionTypes from '../ActionTypes'

export const deleteFoodItem = payloadData => ({
  type: ActionTypes.DELETE_FOOD_ITEM,
  foodId: payloadData,
})

export const deleteFoodItemSuccess = data => ({
  type: ActionTypes.DELETE_FOOD_ITEM_SUCCESS,
  data,
})

export const deleteFoodItemError = error => ({
  type: ActionTypes.DELETE_FOOD_ITEM_ERROR,
  error,
})
