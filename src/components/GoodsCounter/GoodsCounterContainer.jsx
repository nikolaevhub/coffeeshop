import React from "react";
import GoodsCounter from "./GoodsCounter";
import {connect} from "react-redux";
// import {updateCardCount} from "../../redux/basket-reducer";


const GoodsCounterContainer = (props) => {
    return <GoodsCounter {...props}/>
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps,{})(GoodsCounterContainer);