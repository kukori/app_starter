import React from 'react';
import { connect } from 'react-redux';
import { updatePassword } from '../../redux/user/user.actions';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ChangePasswordForm from './change_password/ChangePasswordForm';
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

const ChangePassword = ({updatePassword}) => {
    const classes = useStyles();
    const values = { newPassword: "", confirmPassword: "", password: "" };

    const validationSchema = Yup.object({
        password: Yup.string("")
            .required("Enter your old password"),
        newPassword: Yup.string("")
            .min(8, "Password must contain atleast 8 characters")
            .required("Enter your new password"),
        confirmPassword: Yup.string("Enter your password")
            .required("Confirm your new password")
            .oneOf([Yup.ref("newPassword")], "Password does not match")
    });

    const formSubmit = (data) => {
        updatePassword(data.password, data.newPassword);
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <Paper className={classes.paper}>
                    <Formik initialValues={values} validationSchema={validationSchema} onSubmit={formSubmit} >
                        {(props) => <ChangePasswordForm {...props} />}
                    </Formik>
                </Paper>
            </Container>
        </div>
    )
}

export default connect(null, {updatePassword})(ChangePassword);