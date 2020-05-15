import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../redux/user/user.actions';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RegisterForm from './register/RegisterForm';
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

const Register = ({isAuthenticated, isLoading, register}) => {
    const classes = useStyles();
    const values = {confirmPassword: "", password: "" };

    const validationSchema = Yup.object({
        name: Yup.string("Enter a name").required("Name is required"),
        email: Yup.string("Enter your email")
          .email("Enter a valid email")
          .required("Email is required"),
        password: Yup.string("")
            .min(8, "Password must contain atleast 8 characters")
            .required("Enter your password"),
        confirmPassword: Yup.string("Enter your password")
            .required("Confirm your password")
            .oneOf([Yup.ref("password")], "Password does not match")
    });

    const formSubmit = (data) => {
        console.log(data);
        register(data.name, data.email, data.password);
    }

    if(isAuthenticated && !isLoading) {
        return <Redirect to='/' />
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <Paper className={classes.paper}>
                    <Formik initialValues={values} validationSchema={validationSchema} onSubmit={formSubmit} >
                        {(props) => <RegisterForm {...props} />}
                    </Formik>
                </Paper>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    isLoading: state.user.isLoading
});


export default connect(mapStateToProps, {register})(Register);