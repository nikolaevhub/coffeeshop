import React from 'react';
import {useSelector} from "react-redux";


const TotalPrice = () => {
    const basket = useSelector((state) => state.basket)
    const {goodsInBasket} = basket;

    return <div>
        Total goods:  on the sum
    </div>
}

export default TotalPrice;