import * as ActionTypes from '../ActionTypes'

export const updateFoodItem = (payloadData, foodId) => ({
  type: ActionTypes.UPDATE_FOOD_ITEM,
  payload: payloadData,
  foodId: foodId,
})

export const updateFoodItemSuccess = data => ({
  type: ActionTypes.UPDATE_FOOD_ITEM_SUCCESS,
  data,
})

export const updateFoodItemError = error => ({
  type: ActionTypes.UPDATE_FOOD_ITEM_ERROR,
  error,
})
