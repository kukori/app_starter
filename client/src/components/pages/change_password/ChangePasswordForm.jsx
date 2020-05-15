import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        background: theme.palette.background.default,
    },
    paper: {
        marginTop: 150,
        padding: theme.spacing(4),
    },
    title: {
        marginTop: 8,
        marginBottom: 24
    },
    input: {
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        marginTop: 10,
        marginBottom: 16,
        height: 50
    }
}));

const ChangePasswordForm = ({ values: {currentPassword, newPassword, confirmPassword }, errors, touched, handleSubmit, handleChange, isValid}) => {
    const classes = useStyles();
    return (
        <form>
            <Typography className={classes.loginTitle} variant="h3" component="p" >Change Password</Typography>
            <TextField
                name="password"
                className={classes.input}
                variant="outlined"
                helperText={touched.currentPassword ? errors.currentPassword : ""}
                error={Boolean(errors.currentPassword)}
                label="Current Password"
                fullWidth
                type="password"
                value={currentPassword}
                onChange={handleChange}
            />
            <TextField
                name="newPassword"
                className={classes.input}
                variant="outlined"
                helperText={touched.newPassword ? errors.newPassword : ""}
                error={Boolean(errors.newPassword)}
                label="New Password"
                fullWidth
                type="password"
                value={newPassword}
                onChange={handleChange}
            />
            <TextField
                name="confirmPassword"
                className={classes.input}
                variant="outlined"
                helperText={touched.confirmPassword ? errors.confirmPassword : ""}
                error={Boolean(errors.confirmPassword)}
                label="Confirm Password"
                fullWidth
                type="password"
                value={confirmPassword}
                onChange={handleChange}
            />
            <Button fullWidth className={classes.loginButton} variant="contained" color="primary" size="large" disabled={!isValid} onClick={handleSubmit}>Change Password</Button>
        </form>
    )
}

export default ChangePasswordForm;