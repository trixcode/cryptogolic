import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import mainReducer from './main/reducers';
import mainSaga from './main/sagas';

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger({
    level: 'info',
    duration: true,
    collapsed: true,
})
const store = createStore(
    mainReducer,
    applyMiddleware(
        sagaMiddleware,
        logger
    )
)
sagaMiddleware.run(mainSaga)

export default store;