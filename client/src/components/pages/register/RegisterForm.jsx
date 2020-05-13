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

const RegisterForm = ({ values: {name, email, password, confirmPassword }, errors, touched, handleSubmit, handleChange, isValid}) => {
    const classes = useStyles();
    return (
        <form>
            <Typography className={classes.loginTitle} variant="h3" component="p" >Register User</Typography>
            <TextField
                name="name"
                className={classes.input}
                variant="outlined"
				helperText={touched.name ? errors.name : ""}
				error={Boolean(errors.name)}
				label="Name"
				value={name}
				onChange={handleChange}
				fullWidth
			/>
			<div>{Boolean(errors.name) ? errors.name : ""}</div>
			<TextField
                name="email"
                className={classes.input}
                variant="outlined"
				helperText={touched.email ? errors.email : ""}
				error={Boolean(errors.email)}
				label="Email"
				fullWidth
				value={email}
				onChange={handleChange}
			/>
            <TextField
                name="password"
                className={classes.input}
                variant="outlined"
                helperText={touched.password ? errors.password : ""}
                error={Boolean(errors.password)}
                label="Password"
                fullWidth
                type="password"
                value={password}
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
            <Button fullWidth className={classes.loginButton} variant="contained" color="primary" size="large" disabled={!isValid} onClick={handleSubmit}>Register</Button>
        </form>
    )
}

export default RegisterForm;