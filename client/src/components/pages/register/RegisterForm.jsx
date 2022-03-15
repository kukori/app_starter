import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const RegisterForm = ({ values: {name, email, password, confirmPassword }, errors, touched, handleSubmit, handleChange, isValid}) => {
    return (
        <form>
            <Typography variant="h3" component="p" >Register User</Typography>
            <TextField
                name="name"
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
            <Button fullWidth variant="contained" color="primary" size="large" disabled={!isValid} onClick={handleSubmit}>Register</Button>
        </form>
    )
}

export default RegisterForm;