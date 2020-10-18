import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core/styles";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const useStyles = makeStyles(theme => ({
        gridItemsContainer: {
            [theme.breakpoints.up('lg')]: {
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)"
            }
        }
    })
);

const GridOfCards = ({cards}) => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.gridItemsContainer}  >
            {cards ? (
                cards.map(card => <CoffeeCard key={card.id} cardData={card}/>)
            ) : (
                <CircularProgress color="secondary"/>
            )}
        </Grid>
    )
};

export default GridOfCards;