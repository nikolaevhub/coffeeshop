import mockData from "../../mockData";
const SET_GOODS = 'goods/SET_GOODS';
const SET_CURRENT_PAGE = 'goods/SET_CURRENT_PAGE';

let initialState = {
    goodItems: []
}

const goodsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_GOODS:
            return {
                ...state,
                goodItems: action.goods
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state;
    }
}

export const setGoods = (goods) => {
    return {type: SET_GOODS, goods}
}

export const setGoodsThunkCreator = (goods) => (dispatch) => {
    dispatch(setGoods(goods))
}

export default goodsReducer;