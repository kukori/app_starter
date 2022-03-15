import React from 'react';
import {useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import { resetPassword } from '../../redux/user/user.actions';
import { Container, Paper } from '@mui/material';
import ResetPasswordForm from './reset_password/ResetPasswordForm';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ResetPassword = ({resetPassword}) => {
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
        <div>
            <Container maxWidth="sm">
                <Paper>
                    <Formik initialValues={values} validationSchema={validationSchema} onSubmit={formSubmit} >
                        {(props) => <ResetPasswordForm {...props} />}
                    </Formik>
                </Paper>
            </Container>
        </div>
    )
}

export default connect(null, {resetPassword})(ResetPassword);