import React from "react";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Input from "@material-ui/core/Input";
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import * as BasketActions from "../../../redux/reducers/basket-reducer";

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
        amount >= 2 && amount--;
        dispatch(BasketActions.updateAmountGoodInBasket(id, amount))
    }
    const countPlus = () => {
        dispatch(BasketActions.updateAmountGoodInBasket(id, amount + 1))
    }

    return <>
        <IconButton variant="contained" color="primary" onClick={() => countMinus(id)}>
            <RemoveCircleOutlineRoundedIcon/>
        </IconButton>
        <Input value={amount} className={classes.counterInput} disableUnderline readOnly></Input>
        <IconButton variant="contained" color="primary" onClick={() => countPlus(id)}>
            <AddCircleOutlineRoundedIcon/>
        </IconButton>
    </>
}
export default GoodsCounter;