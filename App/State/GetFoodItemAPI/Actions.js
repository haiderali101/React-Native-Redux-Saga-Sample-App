import * as ActionTypes from '../ActionTypes'

export const getFoodItem = payloadData => ({
  type: ActionTypes.GET_FOOD_ITEM,
  foodId: payloadData,
})

export const getFoodItemSuccess = data => ({
  type: ActionTypes.GET_FOOD_ITEM_SUCCESS,
  data,
})

export const getFoodItemError = error => ({
  type: ActionTypes.GET_FOOD_ITEM_ERROR,
  error,
})
