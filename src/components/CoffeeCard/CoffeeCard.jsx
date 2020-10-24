import React, {useCallback} from "react";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Route from "../../config/routers";
import {useLocation} from "react-router-dom";
import GoodsCounter from "./GoodsCounter/GoodsCounter";
import {useDispatch, useSelector} from "react-redux";
import * as BasketActions from "../../redux/reducers/basket-reducer";
import {
    Card, makeStyles, CardActions,
    CardContent, Typography, Button,
    CardHeader, CardMedia, Grid, IconButton
} from "@material-ui/core"
import mockData from "../../mockDataEn";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

const EXCHANGE_RATE = 90;

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        height: "130px",
        width: "110px",
        margin: "0 auto"
    },
    cardContent: {
        height: "100px",
        overflow: "hidden",
    },
    cardActions: {
        justifyContent: 'center',
        marginBottom: '8px'
    }
}));


const CoffeeCard = ({cardData}) => {
    const classes = useStyles();
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation();
    const goodsInBasket = useSelector((state) => state.basket.goodsInBasket)
    const {title, price, description, imageUrl, id, amount} = cardData;
    let lang = i18n.language || window.localStorage.i18nextLng;
    let rubPrice = (price * EXCHANGE_RATE) .toFixed(2) + " ₽"



    const onAddGoodToBasket = useCallback(() => {
            const mockDataGood = mockData.find(mockDataObject => mockDataObject.id === id)
            const goodsInBasketIds = goodsInBasket.map(goodInBasket => goodInBasket.id)
            const isGoodInBasket = goodsInBasketIds.includes(id)
            if (!isGoodInBasket) {
                dispatch((BasketActions.addGoodToBasket(mockDataGood)))
            }
        },
        [dispatch, id, goodsInBasket])

    const onDeleteGoodFromBasket = useCallback(() => {
        goodsInBasket.find(item => item.id === id && dispatch(BasketActions.deleteGoodFromBasket(id)))
    }, [dispatch, id, goodsInBasket])

    return (
        <Grid item key={id} xs={12} sm={6} md={3} lg>
            <Card>
                <CardHeader title={<Typography variant="subtitle1">{title}</Typography>}
                            subheader={lang === 'ru' ? rubPrice : price + " €"}
                         action={(pathname === Route.basket) && <IconButton aria-label="settings"
                                                                               size="small"
                                                                               onClick={onDeleteGoodFromBasket}
                            >
                                <CloseRoundedIcon/>
                            </IconButton>
                            }/>
                <CardMedia image={imageUrl} className={classes.cardMedia}/>
                <CardContent>
                    <Typography
                        variant="body2"
                        component="p"
                        className={classes.cardContent}
                    >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    {(pathname === Route.basket) ? <GoodsCounter amount={amount} id={id}/>
                        : <Button size="small"
                                  color="primary"
                                  variant="contained"
                                  onClick={onAddGoodToBasket}>{t("AddToBasket")}</Button>}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default React.memo(CoffeeCard);
