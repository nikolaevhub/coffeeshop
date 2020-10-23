import React from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import Router from "../../config/routers";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));


const TotalPrice = () => {
    const goodsInBasket = useSelector((state) => state.basket.goodsInBasket)

    const classes = useStyles();
    const history = useHistory();

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = goodsInBasket.map(good => good.amount * good.price).reduce(reducer, 0).toFixed(2);
    let totalGoods = goodsInBasket.map(good => good.amount).reduce(reducer, 0);

    const onOrderBtn = () => history.push(Router.order);


    return <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" component="h6">
                        Total goods: {totalGoods} on the sum: {sum}
                    </Typography>
                    <Button disabled={goodsInBasket.length === 0} variant="contained" color="secondary"
                            onClick={onOrderBtn}>
                        Order
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    </div>
}

export default TotalPrice;