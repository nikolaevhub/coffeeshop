import React from "react";
import Goods from "./Goods";
import {connect} from "react-redux";
import {addGoodToBasket} from "../../redux/basket-reducer";

const GoodsContainer = (props) => {
  return (
    <Goods {...props}/>
  );
};

const mapStateToProps = (state) => ({
    basket: state.basket
})

export default connect(mapStateToProps, {addGoodToBasket})(GoodsContainer);
