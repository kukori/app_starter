import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { clearMessage } from '../../../redux/message/message.actions'
import { MessageActionTypes } from '../../../redux/message/message.types'

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.white,
    },
}));

const Message = ({message: {message, messageType}, clearMessage}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(message) {
            setOpen(true);
            // eslint-disable-next-line
            setTimeout(() => {clearMessage()}, 5000);
        } else {
            setOpen(false);
        }
    }, [message]);

    const getSeverity = () => {
        switch (messageType) {
            case MessageActionTypes.TYPE_SUCCESS:
                    return "success";
                case MessageActionTypes.TYPE_WARNING:
                    return "warning";
                default:
                    return "error";
          }
    }

    const getTitle = () => {
        switch (messageType) {
            case MessageActionTypes.TYPE_SUCCESS:
                return "Success";
            case MessageActionTypes.TYPE_WARNING:
                return "";
            default:
                return "Error";
          }
    }

    return (
        <div>
            <Snackbar open={open} autoHideDuration={5000} onClose={() => { setOpen(false); }}>
                <Alert
                    elevation={6}
                    variant="filled"
                    severity={getSeverity()}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                ><AlertTitle className={classes.title}>{getTitle()}</AlertTitle>
                    {message ? message : ''}
                </Alert>
            </Snackbar>
        </div>
    )
}

const mapStateToProps = state => ({
    message: state.message,
});

export default connect(mapStateToProps, {clearMessage})(Message);
