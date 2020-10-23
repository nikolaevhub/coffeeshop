import React from "react";
import {useSelector} from "react-redux";
import GridOfCards from "../../components/GridOfCards/GridOfCards";
import TotalPrice from "../../components/TotalPrice/TotalPrice";

const Basket = () => {
    const basket = useSelector((state) => state.basket)
    const {goodsInBasket} = basket

    return (<>
            <GridOfCards cards={goodsInBasket}/>
            <TotalPrice/>
        </>
    );
};

export default Basket;
