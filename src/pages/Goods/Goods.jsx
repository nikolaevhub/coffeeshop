import React, {useCallback, useEffect, useState} from "react";
import GridOfCards from "../../components/GridOfCards/GridOfCards";
import {useDispatch, useSelector} from "react-redux";
import {setGoodsThunkCreator} from "../../redux/reducers/goods-reducer";
import Pagination from "@material-ui/lab/Pagination";
import mockData from "../../mockData";
import {makeStyles} from "@material-ui/core";

const CURRENT_PAGE = 1;
const PORTION_SIZE = 5;
const PAGE_SIZE = 5;

const useStyles = makeStyles((theme)=> ({
    paginator: {
    display: "flex",
    justifyContent: "center",
    marginTop: "25px"
}
}));


const Goods = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    let goodItems = useSelector((state) => state.goods.goodItems)

    let [totalItemsCount, setTotalItemsCount] = useState(0)

    let pagesCount = Math.ceil(totalItemsCount / PAGE_SIZE)

    const getPortion = (CURRENT_PAGE, PORTION_SIZE) => {
        let leftPortionBorder = (CURRENT_PAGE - 1) * PORTION_SIZE;
        let rightPortionBorder = CURRENT_PAGE * PORTION_SIZE;
        let portion = mockData.slice(leftPortionBorder, rightPortionBorder);
        return portion;
    }

    useEffect(() => {
        setTotalItemsCount(mockData.length)
        dispatch(setGoodsThunkCreator(getPortion(CURRENT_PAGE, PORTION_SIZE)))
    }, [dispatch])


    const onBtnChange = useCallback((event, currentPage) =>
        dispatch(setGoodsThunkCreator(getPortion(currentPage, PORTION_SIZE))), [dispatch])

    return <>
        <GridOfCards cards={goodItems}/>
        <Pagination
            className={classes.paginator}
            count={pagesCount}
            color={"secondary"}
            onChange={onBtnChange}/>
    </>
};

export default Goods;
