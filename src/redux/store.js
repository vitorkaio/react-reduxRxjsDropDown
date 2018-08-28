import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import reducersRoots from "./reducersRoots";
import epicsRoots from "./epicsRoots";

const epicMiddleware = createEpicMiddleware();
const configureStore = createStore(reducersRoots, applyMiddleware(epicMiddleware, logger));
epicMiddleware.run(epicsRoots);

/* const epicMiddleware = createEpicMiddleware();
const createStoreWithMiddleware = applyMiddleware(logger, epicMiddleware)(createStore);
epicMiddleware.run(epicsRoots); */


export default configureStore;