import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const ResetPasswordForm = ({ values: {password, confirmPassword }, errors, touched, handleSubmit, handleChange, isValid,  setFieldTouched}) => {
    return (
        <form>
            <Typography variant="h3" component="p" >Change Password</Typography>
            <TextField
                name="password"
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
                variant="outlined"
                helperText={touched.confirmPassword ? errors.confirmPassword : ""}
                error={Boolean(errors.confirmPassword)}
                label="Confirm Password"
                fullWidth
                type="password"
                value={confirmPassword}
                onChange={handleChange}
            />
            <Button fullWidth variant="contained" color="primary" size="large" disabled={!isValid} onClick={handleSubmit}>Change Password</Button>
        </form>
    )
}

export default ResetPasswordForm;