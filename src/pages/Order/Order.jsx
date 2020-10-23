import React, {useCallback, useState} from 'react';
import OrderForm from "../../components/OrderForm/OrderForm";
import Popup from "../../components/Popup/Popup";
import Route from "../../config/routers";
import {useHistory} from "react-router-dom";

const Order = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const history = useHistory()

    const handleClose = useCallback(() => {
        setOpenPopup(false);
        history.push(Route.goods)
    }, [setOpenPopup])

    return (
        <>
            <OrderForm setOpenPopup={setOpenPopup}/>
            <Popup openPopup={openPopup} handleClose={handleClose}/>
        </>
    )
}

export default Order;