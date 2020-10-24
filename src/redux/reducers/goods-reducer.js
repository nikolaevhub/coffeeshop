const SET_GOODS = 'goods/SET_GOODS';
const SET_LANG = 'goods/SET_LANG';

let initialState = {
    goodItems: [],
    lang: ''
}

const goodsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_GOODS:
            return {
                ...state,
                goodItems: action.goods
            }
        case SET_LANG:
            return {
                ...state,
                lang: action.lang
            }
        default:
            return state;
    }
}

export const setGoods = (goods) => {
    return {type: SET_GOODS, goods}
}
export const setLang = (lang) => {
    return {type: SET_LANG, lang}
}

export const setGoodsThunkCreator = (goods) => (dispatch) => {
    dispatch(setGoods(goods))
}

export const setLangThunkCreator = (lang) => (dispatch) => {
    dispatch(setLang(lang))
}

export default goodsReducer;