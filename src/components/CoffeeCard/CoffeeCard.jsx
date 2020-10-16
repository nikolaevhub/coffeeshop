import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import {CardMedia} from "@material-ui/core";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import IconButton from "@material-ui/core/IconButton";
import GoodsCounterContainer from "../GoodsCounter/GoodsCounterContainer";

const useStyles = makeStyles({
    cardMedia: {
        height: "130px",
        width: "110px",
        margin: " 0 auto"
    },
    cardContent: {
        height: "100px",
        overflow: "hidden",
    },
    cardActions: {
        justifyContent: 'center',
        marginBottom: '8px'
    }
});


const CoffeeCard = (props) => {
    const classes = useStyles();
    const {addGoodToBasket, deleteGoodFromBasket} = props;
    const {title, price, description, imageUrl, id} = props.coffeeDataObject;
    const {pathname} = props.location;
    return (
        <Card>
            <CardHeader title={<Typography variant="subtitle1">{title}</Typography>}
                        subheader={price}
                        action={(pathname === '/basket') &&
                        <IconButton aria-label="settings"
                                    size="small"
                                    onClick={() => (deleteGoodFromBasket(id))}
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
                {(pathname === '/basket') ? <GoodsCounterContainer id={id}/>
                    : <Button size="small"
                              color="primary"
                              variant="contained"
                              onClick={() => (addGoodToBasket(id))}>Add to basket</Button>}
            </CardActions>
        </Card>
    );
};

export default CoffeeCard;
