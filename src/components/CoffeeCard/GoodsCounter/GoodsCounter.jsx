import React, {useCallback} from "react";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Input from "@material-ui/core/Input";
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import * as BasketActions from "../../../redux/reducers/basket-reducer";

const MAX_AMOUNT_FOR_MINUS = 2

const useStyles = makeStyles({
    counterInput: {
        maxWidth: '45px',
        '& input': {
            textAlign: 'center'
        }
    }
});

const GoodsCounter = ({id, amount}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const countMinus = () => {
        let newAmount = amount >= MAX_AMOUNT_FOR_MINUS ? amount - 1 : amount
        dispatch(BasketActions.updateAmountGoodInBasket(id, newAmount))
    }
    const countPlus = () => {
        let newAmount = amount + 1
        dispatch(BasketActions.updateAmountGoodInBasket(id, newAmount))
    }

    return <>
        <IconButton variant="contained" color="primary" onClick={countMinus}>
            <RemoveCircleOutlineRoundedIcon/>
        </IconButton>
        <Input value={amount} className={classes.counterInput} disableUnderline readOnly></Input>
        <IconButton variant="contained" color="primary" onClick={countPlus}>
            <AddCircleOutlineRoundedIcon/>
        </IconButton>
    </>
}
export default GoodsCounter;