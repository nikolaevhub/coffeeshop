import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import {makeStyles} from "@material-ui/styles";
import {NavLink} from "react-router-dom";
import Router from "../../../config/routers";
import {useSelector} from "react-redux";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles({
    toolBarContainer: {
        justifyContent: "space-between"
    },
    basketIcon: {
        color: "white"
    },
    headerTitle: {
        color: "white",
        textDecoration: "none"
    }
});

const Header = () => {
    const basket = useSelector((state) => state.basket)
    const badgeContent = basket.goodsInBasket.length;
    const classes = useStyles();


    return <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBarContainer}>
            <Typography variant="h6">
                <NavLink to={Router.goods} className={classes.headerTitle}>CoffeeStore</NavLink>
            </Typography>
            <Link href={Router.basket}>
                <Badge badgeContent={badgeContent <= 9 ? badgeContent : '9+'} color="secondary">
                    <ShoppingCartRoundedIcon className={classes.basketIcon}/>
                </Badge>
            </Link>

        </Toolbar>
    </AppBar>
}

export default Header;