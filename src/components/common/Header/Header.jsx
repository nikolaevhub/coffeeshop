import React, {useCallback} from 'react';
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import {makeStyles} from "@material-ui/styles";
import {NavLink} from "react-router-dom";
import Router from "../../../config/routers";
import {useDispatch, useSelector} from "react-redux";
import Link from "@material-ui/core/Link";
import {useTranslation} from 'react-i18next';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import {setLangThunkCreator} from "../../../redux/reducers/goods-reducer";


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
    },
    languageButton: {
        color: "white",
    }
});

const Header = () => {
    const basket = useSelector((state) => state.basket)
    const badgeContent = basket.goodsInBasket.length;
    const classes = useStyles();
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation();


    const handleClick = useCallback((lang) => () => {
        i18n.changeLanguage(lang);
        dispatch(setLangThunkCreator(lang))
    }, [dispatch])


    return <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBarContainer}>
            <Typography variant="h6">
                <NavLink to={Router.goods} className={classes.headerTitle}>{t('HeaderTitle')}</NavLink>
            </Typography>
            <Box>
                <ButtonGroup aria-label="text primary button group" variant="text">
                    <Button className={classes.languageButton} onClick={handleClick('en')}>EN</Button>
                    <Button className={classes.languageButton} onClick={handleClick('ru')}>RU</Button>
                </ButtonGroup>
                <Link href={Router.basket}>
                    <Badge badgeContent={badgeContent <= 9 ? badgeContent : '9+'} color="secondary">
                        <ShoppingCartRoundedIcon className={classes.basketIcon}/>
                    </Badge>
                </Link>
            </Box>

        </Toolbar>
    </AppBar>
}

export default Header;