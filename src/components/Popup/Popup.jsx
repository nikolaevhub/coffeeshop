import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme)=> ({
    dialogActions: {
        justifyContent: "center"
    }
}));

const Popup = ({openPopup, handleClose}) => {
    const classes = useStyles();
    const [t, i18n] = useTranslation();
    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openPopup}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                {t("OrderPlaced")}
            </DialogTitle>
            <DialogActions className={classes.dialogActions}>
                <Button autoFocus onClick={handleClose} color="secondary" variant="contained">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Popup;