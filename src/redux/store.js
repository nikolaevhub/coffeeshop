import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export let persistor = persistStore(store);



export default store;