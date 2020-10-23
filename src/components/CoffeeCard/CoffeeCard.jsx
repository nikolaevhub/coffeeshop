import React, {useCallback} from "react";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Route from "../../config/routers";
import {useLocation} from "react-router-dom";
import GoodsCounter from "./GoodsCounter/GoodsCounter";
import {useDispatch} from "react-redux";
import * as BasketActions from "../../redux/reducers/basket-reducer";
import {
    Card, makeStyles, CardActions,
    CardContent, Typography, Button,
    CardHeader, CardMedia, Grid, IconButton
} from "@material-ui/core"


const useStyles = makeStyles((theme)=> ({
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

    const {title, price, description, imageUrl, id, amount} = cardData;

    const dispatch = useDispatch();

    const onAddGoodToBasket = useCallback(() => dispatch(BasketActions.addGoodToBasket(id)),
        [dispatch, id])

    const onDeleteGoodFromBasket = useCallback(() => dispatch(BasketActions.deleteGoodFromBasket(id)),
        [dispatch,id])

    const {pathname} = useLocation();

    return (
        <Grid item key={id} xs={12} sm={6} md={3} lg>
            <Card>
                <CardHeader title={<Typography variant="subtitle1">{title}</Typography>}
                            subheader={price}
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
                                  onClick={onAddGoodToBasket}>Add to basket</Button>}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CoffeeCard;
