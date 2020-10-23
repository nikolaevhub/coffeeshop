import React, {useCallback} from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {normalizePhone} from "../../utils/validators/normalizePhone";
import {validate} from "../../utils/validators/validate";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {clearBasket} from "../../redux/reducers/basket-reducer";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: '40vh',
        width: '70vw',
        maxWidth: '350px',
    },
    submitBtn: {
        marginTop: '30px'
    },
    container: {
        display: 'grid',
        justifyItems: 'center'
    }
}));

const renderTextField = ({label, input, meta: {touched, invalid, error}, ...custom}) => (

    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

const OrderForm = ({handleSubmit, valid, reset, setOpenPopup}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleOpen = useCallback(() => {
        setOpenPopup(true);
        dispatch(clearBasket());
        reset();
    }, [setOpenPopup, reset, dispatch])

    return (
        <div className={classes.container}>
            <Paper className={classes.paper}>
                <Typography variant={"h5"} gutterBottom={true}>Order form</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field fullWidth name="firstName" component={renderTextField} label="First Name"/>
                            </div>
                            <div>
                                <Field fullWidth name="phone" component={renderTextField} label="Phone"
                                       normalize={normalizePhone}/>
                            </div>
                            <div>
                                <Field fullWidth name="email" component={renderTextField} label="Email"/>
                            </div>
                            <div>
                                {/*Вместо onSubmit использовал onClick*/}
                                <Button variant="contained" color="secondary" className={classes.submitBtn}
                                        disabled={!valid} onClick={handleOpen}>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default reduxForm({
    form: 'OrderForm',
    validate
})(OrderForm)