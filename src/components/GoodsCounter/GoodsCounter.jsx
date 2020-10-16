import React, {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Input from "@material-ui/core/Input";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    counterInput: {
        maxWidth: '45px',
        '& input': {
            textAlign: 'center'
        }
    }
});

const GoodsCounter = (props) => {
    const classes = useStyles();
    const [count, setCount] = useState(1)

    const countMinus = () => {
        count >= 2 && setCount(count - 1)
    }
    const countPlus = () => {
        setCount(count + 1)
    }
    return <>
        <IconButton variant="contained" color="primary" onClick={countMinus}>
            <RemoveCircleOutlineRoundedIcon/>
        </IconButton>
        <Input value={count} className={classes.counterInput} disableUnderline></Input>
        <IconButton variant="contained" color="primary" onClick={countPlus}>
            <AddCircleOutlineRoundedIcon/>
        </IconButton>
    </>

}
export default GoodsCounter;