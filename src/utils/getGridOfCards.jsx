import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import getCoffeeCard from "./getCoffeeCard.jsx";

const getGridOfCards = (items, props, className) => {
    return (
        <Grid container spacing={3} className={className}>
            {items ? (
                items.map((item) => getCoffeeCard(item, props))
            ) : (
                <CircularProgress color="secondary"/>
            )}
        </Grid>
    )
};

export default getGridOfCards;