import {makeStyles} from "@material-ui/styles";
import getGridOfCards from "../../utils/getGridOfCards";
import React from "react";

const useStyles = makeStyles(theme => ({
        gridItemsContainer: {
            [theme.breakpoints.up('lg')]: {
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)"
            },
        }
    })
);

const Basket = (props) => {
    const classes = useStyles();
    const {goodsInBasket} = props.basket
    return (
        <React.Fragment>
            {getGridOfCards(goodsInBasket, {...props}, classes.gridItemsContainer)}
        </React.Fragment>
    );
};

export default Basket;
