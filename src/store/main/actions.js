import { SET_TEST_NAME, SET_DEFAULT_TEST_NAME } from './actionTypes'

export const setTestName = (testName) => ({
  type: SET_TEST_NAME,
  data: testName
});
export const setDefaultTestName = () => ({
  type: SET_DEFAULT_TEST_NAME,
});