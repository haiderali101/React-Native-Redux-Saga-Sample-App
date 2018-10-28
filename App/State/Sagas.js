// @flow

import FoodListSagas from './FoodItemListAPI/Sagas'
import CreateFoodItemSagas from './CreateFoodItemAPI/Sagas'
import UpdateFoodItemSagas from './UpdateFoodItemAPI/Sagas'
import GetFoodItemSagas from './GetFoodItemAPI/Sagas'
import DeleteFoodItemSagas from './DeleteFoodItemAPI/Sagas'

export default function* root() {
  yield [
    FoodListSagas(),
    CreateFoodItemSagas(),
    UpdateFoodItemSagas(),
    GetFoodItemSagas(),
    DeleteFoodItemSagas(),
  ]
}
