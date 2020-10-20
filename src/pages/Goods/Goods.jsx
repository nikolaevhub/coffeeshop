import React, {useEffect, useState} from "react";
import GridOfCards from "../../components/GridOfCards/GridOfCards";
import {useDispatch, useSelector} from "react-redux";
import {getGoodsThunkCreator} from "../../redux/reducers/goods-reducer";
import Pagination from "@material-ui/lab/Pagination";
import classes from './Goods.module.css'

const Goods = () => {
    const dispatch = useDispatch();
    let goods = useSelector((state) => state.goods)
    let {goodItems, totalItemsCount, currentPage, pageSize, portionSize = 5} = goods
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    useEffect(() => {
        dispatch(getGoodsThunkCreator(currentPage))
    }, [dispatch])


    const onBtnChange = (event, currentPage) => {
        let leftPortionBorder = (currentPage - 1) * portionSize;
        let rightPortionBorder = currentPage * portionSize;
        dispatch(getGoodsThunkCreator(currentPage, leftPortionBorder, rightPortionBorder))

    }
    return <>
        <GridOfCards cards={goodItems}/>
            <Pagination
                className={classes.paginator}
                count={pagesCount}
                size={"large"}
                color={"secondary"}
                onChange={(event, page) => onBtnChange(event, page)}/>
    </>
};

export default Goods;
