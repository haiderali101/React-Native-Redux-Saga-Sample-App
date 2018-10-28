// @flow

import LandingScreen from './LandingScreen'
import { connect } from 'react-redux'

import { getFoodList } from '../../State/FoodItemListAPI/Actions'
import { createFoodItem } from '../../State/CreateFoodItemAPI/Actions'
import { deleteFoodItem } from '../../State/DeleteFoodItemAPI/Actions'

const mapStateToProps = state => ({
  foodListResponse: state.foodList,
  createFoodDataResponse: state.createFoodData,
  updateFoodItemResponse: state.updateFoodItem,
  getFoodItemResponse: state.getFoodItem,
  deleteFoodItemResponse: state.deleteFoodItem,
})

const mapDispatchToProps = dispatch => ({
  getFoodList: () => {
    dispatch(getFoodList())
  },
  createFoodItem: (...args) => {
    dispatch(createFoodItem(...args))
  },
  deleteFoodItem: (...args) => {
    dispatch(deleteFoodItem(...args))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingScreen)
