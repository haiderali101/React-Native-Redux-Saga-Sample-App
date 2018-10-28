// @flow

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------ Logger Middleware ------------- */
  // if (DebugSetting.reduxLogging) {
  middleware.push(createLogger())
  // }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */

  // in dev mode, we'll create the store through Reactotron
  const store = createStore(rootReducer, compose(...enhancers))

  sagaMiddleware.run(rootSaga)

  return store
}
