// @flow

export const createReducer = (initialState, reducers) => (state = initialState, action) => {
  const reducer = reducers[action.type]

  return reducer ? reducer(state, action) : state
}
