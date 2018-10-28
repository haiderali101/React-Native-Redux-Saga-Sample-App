// @flow

import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'
import { connect } from 'react-redux'
import LandingScreen from './LandingScreen'

class RootContainer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LandingScreen />
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootContainer)
