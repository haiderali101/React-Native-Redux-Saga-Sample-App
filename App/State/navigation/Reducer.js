// @flow

import { NAV } from '../ActionTypes'
import Immutable from 'seamless-immutable'
import { createReducer } from '../CreateReducer'
import * as NavigationRouter from '../../Navigation/NavigationRouter'

const INITIAL_STATE = Immutable({
  index: 0,
  routes: [{ key: 'Landing', routeName: 'Landing' }],
})

export const reducer = (state = INITIAL_STATE, action) => {
  const newState = NavigationRouter.MainRouter.router.getStateForAction(
    action,
    Immutable.asMutable(state, { deep: true }),
  )
  const mainScreenRoute = state.routes[0]
  var mainScreenRoute2 = null

  // switch (action.type) {
  //   case 'SCAN_SOME_ACTION':
  //     mainScreenRoute2 = {
  //       ...mainScreenRoute,
  //       index: 1,
  //     }
  //
  //     return state.merge({
  //       index: 0,
  //       routes: [mainScreenRoute2],
  //     })
  //     break
  // }

  return newState ? state.merge(newState) : state
}
