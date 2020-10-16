import React from 'react';
import Basket from './Basket'
import {connect} from "react-redux";
import {addGoodToBasket, deleteGoodFromBasket} from "../../redux/basket-reducer";

const BasketContainer = (props) => {
    return (
        <Basket {...props}/>
    )
}

const mapStateToProps = (state) => ({
    basket: state.basket
})

export default connect(mapStateToProps, {addGoodToBasket,deleteGoodFromBasket})(BasketContainer);