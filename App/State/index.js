// @flow

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from './Sagas'

export default () => {
  const rootReducer = combineReducers({
    nav: require('./navigation/Reducer').reducer,
    foodList: require('./FoodItemListAPI/Reducer').reducer,
    createFoodData: require('./CreateFoodItemAPI/Reducer').reducer,
    updateFoodItem: require('./UpdateFoodItemAPI/Reducer').reducer,
    getFoodItem: require('./GetFoodItemAPI/Reducer').reducer,
    deleteFoodItem: require('./DeleteFoodItemAPI/Reducer').reducer,
  })

  return configureStore(rootReducer, rootSaga)
}
