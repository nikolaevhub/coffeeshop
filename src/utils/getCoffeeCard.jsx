import {Grid} from "@material-ui/core";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import React from "react";

const getCoffeeCard = (coffeeDataObject, props) => {
    return (
        <Grid item key={coffeeDataObject.id} xs={12} sm={6} md={3} lg>
            <CoffeeCard coffeeDataObject={coffeeDataObject} {...props} />
        </Grid>
    );
};
export default getCoffeeCard;