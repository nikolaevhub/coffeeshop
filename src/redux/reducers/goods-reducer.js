import mockData from "../../mockData";

const SET_GOODS = 'goods/SET_GOODS';
const SET_CURRENT_PAGE = 'goods/SET_CURRENT_PAGE';
const SET_TOTAL_ITEMS_COUNT = 'goods/SET_TOTAL_ITEMS_COUNT';


let initialState = {
    goodItems: [],
    totalItemsCount: 0,
    currentPage: 1,
    pageSize: 5
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
        case SET_TOTAL_ITEMS_COUNT:
            return {
                ...state,
                totalItemsCount: action.totalItemsCount
            }

        default:
            return state;
    }
}

export const setGoods = (goods) => {
    return {type: SET_GOODS, goods}
}

export const setTotalItemsCount = (totalItemsCount) => {
    return {type: SET_TOTAL_ITEMS_COUNT, totalItemsCount}

}

export const getGoodsThunkCreator = (currentPage, leftPortionBorder, rightPortionBorder) => (dispatch) => {
    // Поставил костыль, т.к. с реального сервера данные приходят порционно
    // При наличии порционных данных написал бы седующее:
   // pages.map(page => page === currentPage && dispatch(setGoods(mockData.slice(leftPortionBorder,rightPortionBorder))))

    currentPage === 1 && dispatch(setGoods(mockData.slice(0,5)));
    currentPage === 2 && dispatch(setGoods(mockData.slice(leftPortionBorder,rightPortionBorder)));
    currentPage === 3 && dispatch(setGoods(mockData.slice(leftPortionBorder,rightPortionBorder)));
    currentPage === 4 && dispatch(setGoods(mockData.slice(leftPortionBorder,rightPortionBorder)));
    currentPage === 5 && dispatch(setGoods(mockData.slice(leftPortionBorder,rightPortionBorder)));
    currentPage === 6 && dispatch(setGoods(mockData.slice(leftPortionBorder,rightPortionBorder)));
    currentPage === 7 && dispatch(setGoods(mockData.slice(leftPortionBorder,rightPortionBorder)));

    dispatch(setTotalItemsCount(mockData.length));
}

export default goodsReducer;