import mockData from "../../mockData";
import {updateObjectInArray} from "../../utils/object-helpers";

const ADD_GOOD_TO_BASKET = "basket/ADD_GOOD_TO_BASKET"
const DELETE_GOOD_FROM_BASKET = "basket/DELETE_GOOD_FROM_BASKET"
const UPDATE_AMOUNT_GOOD_BASKET = "basket/UPDATE_AMOUNT_GOOD_BASKET"

let initialState = {
    goodsInBasket: []
}

const basketReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_GOOD_TO_BASKET:
            let goodToAdd = action.good;
            return {
                ...state,
                goodsInBasket: [...state.goodsInBasket, goodToAdd]
            }
        case DELETE_GOOD_FROM_BASKET:
            let id = action.id;
            return {
                ...state,
                goodsInBasket: [...state.goodsInBasket].filter(good => good.id !== id)
            }
        case UPDATE_AMOUNT_GOOD_BASKET:

            return {
                ...state,
                goodsInBasket: updateObjectInArray([...state.goodsInBasket],
                    action.id, 'id', {amount: action.value})
            }
        default:
            return state;
    }
}

export const addGoodToBasketActionCreator = (good) => {
    return {type: ADD_GOOD_TO_BASKET, good}
}
export const deleteGoodFromBasketActionCreator = (id) => {
    return {type: DELETE_GOOD_FROM_BASKET, id}
}
export const updateAmountGoodActionCreator = (id, value) => {
    return {type: UPDATE_AMOUNT_GOOD_BASKET, id, value}
}


export const addGoodToBasket = (id) => (dispatch, getState) => {
    const mockDataGood = mockData.find(mockDataObject => mockDataObject.id === id)
    const goodsInBasket = getState().basket.goodsInBasket;
    const goodsInBasketIds = goodsInBasket.map(goodInBasket => goodInBasket.id)
    const isGoodInBasket = goodsInBasketIds.includes(id)

    if (!isGoodInBasket) {
        dispatch(addGoodToBasketActionCreator(mockDataGood))
    }
}
export const deleteGoodFromBasket = (id) => (dispatch, getState) => {
    let goodsInBasket = getState().basket.goodsInBasket;
    goodsInBasket.find(item => item.id === id && dispatch(deleteGoodFromBasketActionCreator(id)))
}

export const updateAmountGoodInBasket = (id, value) => (dispatch) => {
    dispatch(updateAmountGoodActionCreator(id,value))
}

export default basketReducer;