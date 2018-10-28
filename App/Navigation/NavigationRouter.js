// @flow

import { createStackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

import LandingScreen from '../Containers/LandingScreen'

import React from 'react'
import { View } from 'react-native'

export const MainRouter = createStackNavigator(
  {
    Landing: { screen: LandingScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: 'white', zIndex: 100, top: 0, left: 0, right: 0, bottom: 0 },
      headerTitleStyle: {
        color: 'rgb(83,83,83)',
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
      },
      headerBackTitle: null,
      gesturesEnabled: false,
    }),
    headerMode: 'screen',
    initialRouteName: 'Landing',
  },
)

class NavigationRouter extends React.Component {
  render() {
    return (
      <MainRouter
        navigation={{
          dispatch: this.props.dispatch,
          state: this.props.nav,
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(NavigationRouter)
