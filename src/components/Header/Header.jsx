import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import {makeStyles} from "@material-ui/styles";
import {NavLink, useHistory} from "react-router-dom";


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

const Header = ({basket}) => {

    const badgeContent = basket.goodsInBasket.length;
    const classes = useStyles();
    const history = useHistory();
    const onBasketClick = () => history.push('basket');

    return <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBarContainer}>
            <Typography variant="h6" >
                <NavLink to={'/'} className={classes.headerTitle}>CoffeeStore</NavLink>
            </Typography>
            <IconButton onClick={onBasketClick}>
                <Badge badgeContent={badgeContent <= 9 ? badgeContent : '9+'} color="secondary">
                    <ShoppingCartRoundedIcon className={classes.basketIcon}/>
                </Badge>
            </IconButton>
        </Toolbar>
    </AppBar>
}

export default Header;