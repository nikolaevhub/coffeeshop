import {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import mockData from "../../mockData";
import getGridOfCards from "../../utils/getGridOfCards";

const useStyles = makeStyles(theme => ({
        gridItemsContainer: {
            [theme.breakpoints.up('lg')]: {
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)"
            },
        }
    })
);

const Goods = (props) => {
    const classes = useStyles();
    const [coffeeData, setCoffeeData] = useState(mockData);
    return (
        getGridOfCards(coffeeData, {...props}, classes.gridItemsContainer)
    );
};

export default Goods;
