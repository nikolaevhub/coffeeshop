import React from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import Router from "../../config/routers";
import {useTranslation} from "react-i18next";

const EXCHANGE_RATE = 90

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
    const [t, i18n] = useTranslation();
    let lang = i18n.language || window.localStorage.i18nextLng;


    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = goodsInBasket.map(good => good.amount * good.price).reduce(reducer, 0).toFixed(2);
    let totalGoods = goodsInBasket.map(good => good.amount).reduce(reducer, 0);
    let rubPrice = (sum * EXCHANGE_RATE).toFixed(2) + " ₽"

    const onOrderBtn = () => history.push(Router.order);


    return <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" component="h6">
                        {t("TotalGoods")}: {totalGoods} {t("OnTheSum")}: {lang === 'ru' ? rubPrice : sum + " €"}
                    </Typography>
                    <Button disabled={goodsInBasket.length === 0} variant="contained" color="secondary"
                            onClick={onOrderBtn}>
                        {t("Order")}
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    </div>
}

export default TotalPrice;