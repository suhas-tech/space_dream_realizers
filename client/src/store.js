import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;
const store = createStore(
    combineReducers({
        ...reducers,
    }),
    composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);
export { store };
