import mockData from "../mockData";

const ADD_GOOD_TO_BASKET = "basket/ADD_GOOD_TO_BASKET"
const DELETE_GOOD_FROM_BASKET = "basket/DELETE_GOOD_FROM_BASKET"
const GOOD_COUNT_ADD = "basket/GOOD_COUNT_ADD"
const GOOD_COUNT_LOW = "basket/GOOD_COUNT_LOW"


let initialState = {
    goodsInBasket: [{
        title: "Keurig K-Duo",
        price: "$149.99",
        description:
            "Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup ",
        avatarUrl:
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg",
        id: 1
    },
        {
            title: "KRUPS Electric",
            price: "$19.99",
            description:
                "Large grinding capacity yields ground coffee for up to 12 cups of coffee",
            avatarUrl:
                "https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",
            imageUrl:
                "https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",
            id: 2
        }],
    goodCount: 1
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
        case GOOD_COUNT_ADD:
            return {
                ...state,
                goodCount: state.goodCount + 1
            }
        case GOOD_COUNT_LOW:
            return {
                ...state,
                goodCount: state.goodCount - 1
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
export const addGoodCountActionCreator = () => {
    return {type: GOOD_COUNT_ADD}
}

export const lowGoodCountActionCreator = () => {
    return {type: GOOD_COUNT_LOW}
}

export const addGoodCount = (id) => (dispatch) => {
    dispatch(addGoodCountActionCreator());
}
export const lowGoodCount = (id) => (dispatch) => {
    dispatch(lowGoodCountActionCreator());
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

export default basketReducer;