import { SET_TEST_NAME, SET_DEFAULT_TEST_NAME } from "./actionTypes";

const initialState = {
    crypto: {},
    testName: '',
}
const main = (state=initialState, action) => {
  switch (action.type) {
    case SET_TEST_NAME:
      return Object.assign({}, state, {
      testName: action.data
    })
    case SET_DEFAULT_TEST_NAME:
      return Object.assign({}, state, 
        { testName: ''})
    default:
      return state
  }
}

export default main;