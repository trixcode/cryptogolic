import { createStore } from 'redux';
import mainReducer from './main/reducers';

const store = createStore(mainReducer)

export default store;