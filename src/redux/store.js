import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import basketReducer from "./basket-reducer";
import goodsReducer from "./goods-reducer";

let reducers = combineReducers({
    form: formReducer,
    basket: basketReducer,
    goods: goodsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// store.subscribe(()=>{
//     localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })

export default store;