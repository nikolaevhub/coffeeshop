import React from 'react';
import Paper from "@material-ui/core/Paper";
import FieldLevelValidationForm from "../../components/OrderForm";

const Order = (props) => {

    return (
        // <div>This is a Order page</div>
        <Paper>
            <FieldLevelValidationForm/>
        </Paper>
    )
}

export default Order;