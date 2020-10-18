import basketReducer from "./basket-reducer";
import goodsReducer from "./goods-reducer";
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
    basket: basketReducer,
    goods: goodsReducer,
    form: formReducer
});

export default reducers;

