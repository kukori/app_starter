import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';


export default function ConfirmDialog(props) {

    const { handleCancel, handleAccept, open, title = "Confirm", message = "Are you sure?", okText = "Ok", cancelText = "Cancel" } = props
    const theme = useTheme();

    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={open}
            onClose={handleCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color="primary">{cancelText}</Button>
                <Button variant="contained" onClick={handleAccept} color="primary" autoFocus>{okText}</Button>
            </DialogActions>
        </Dialog>
    )
}

