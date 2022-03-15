import React from 'react';
import { connect } from 'react-redux';
import { updatePassword } from '../../redux/user/user.actions';
import { Container, Paper } from '@mui/material';
import ChangePasswordForm from './change_password/ChangePasswordForm';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ChangePassword = ({updatePassword}) => {
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
        <div>
            <Container maxWidth="sm">
                <Paper>
                    <Formik initialValues={values} validationSchema={validationSchema} onSubmit={formSubmit} >
                        {(props) => <ChangePasswordForm {...props} />}
                    </Formik>
                </Paper>
            </Container>
        </div>
    )
}

export default connect(null, {updatePassword})(ChangePassword);