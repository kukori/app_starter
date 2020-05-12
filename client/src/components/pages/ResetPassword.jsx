import React from 'react';
import {useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import { resetPassword } from '../../redux/user/user.actions';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ResetPasswordForm from './reset_password/ResetPasswordForm';
import { Formik } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        background: theme.palette.background.default,
    },
    paper: {
        marginTop: 150,
        padding: theme.spacing(4),
    }
}));

const ResetPassword = ({resetPassword}) => {
    const classes = useStyles();
    let {resetToken} = useParams();
    const values = {confirmPassword: "", password: "" };

    const validationSchema = Yup.object({
        password: Yup.string("")
            .min(8, "Password must contain atleast 8 characters")
            .required("Enter your password"),
        confirmPassword: Yup.string("Enter your password")
            .required("Confirm your password")
            .oneOf([Yup.ref("password")], "Password does not match")
    });

    const formSubmit = (data) => {
        console.log(data);
        resetPassword(resetToken, data.password);
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <Paper className={classes.paper}>
                    <Formik
                        render={props => <ResetPasswordForm {...props} />}
                        initialValues={values}
                        validationSchema={validationSchema}
                        onSubmit={formSubmit}
                    />
                </Paper>
            </Container>
        </div>
    )
}

export default connect(null, {resetPassword})(ResetPassword);