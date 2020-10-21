import React, {useEffect, useState} from "react";
import GridOfCards from "../../components/GridOfCards/GridOfCards";
import {useDispatch, useSelector} from "react-redux";
import {setGoodsThunkCreator} from "../../redux/reducers/goods-reducer";
import Pagination from "@material-ui/lab/Pagination";
import classes from './Goods.module.css'
import mockData from "../../mockData";

const Goods = () => {
    const dispatch = useDispatch()
    let goodItems = useSelector((state) => state.goods.goodItems)

    let [totalItemsCount, setTotalItemsCount] = useState(0)
    let [currentPage, setCurrentPage] = useState(1)
    let [portionSize, setPortionSize] = useState(5)
    let [pageSize, setPageSize] = useState(5)

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    const getPortion = (currentPage,portionSize) => {
        let leftPortionBorder = (currentPage - 1) * portionSize;
        let rightPortionBorder = currentPage * portionSize;
        let portion = mockData.slice(leftPortionBorder, rightPortionBorder);
        return portion;
    }

    useEffect(() => {
        setTotalItemsCount(mockData.length)
        dispatch(setGoodsThunkCreator(getPortion(currentPage, portionSize)))
    }, [dispatch])


    const onBtnChange = (event, currentPage) => {
        dispatch(setGoodsThunkCreator(getPortion(currentPage, portionSize)))
    }
    return <>
        <GridOfCards cards={goodItems}/>
        <Pagination
            className={classes.paginator}
            count={pagesCount}
            color={"secondary"}
            onChange={(event, page) => onBtnChange(event, page)}/>
    </>
};

export default Goods;
