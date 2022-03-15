import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const ChangePasswordForm = ({ values: {currentPassword, newPassword, confirmPassword }, errors, touched, handleSubmit, handleChange, isValid}) => {
    return (
        <form>
            <Typography variant="h3" component="p" >Change Password</Typography>
            <TextField
                name="password"
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

export default ChangePasswordForm;