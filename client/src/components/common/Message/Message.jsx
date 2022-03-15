import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IconButton, Snackbar, Alert, AlertTitle } from '@mui/material';
import { Close } from '@mui/icons-material';
import { clearMessage } from '../../../redux/message/message.actions'
import { MessageActionTypes } from '../../../redux/message/message.types'

const Message = ({message: {message, messageType}, clearMessage}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(message) {
            setOpen(true);
            setTimeout(() => {clearMessage()}, 5000);
        } else {
            setOpen(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        <Close fontSize="inherit" />
                        </IconButton>
                    }
                ><AlertTitle>{getTitle()}</AlertTitle>
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
