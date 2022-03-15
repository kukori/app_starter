import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/user/user.actions';
import { TextField, Button, Typography, Container, Paper, LinearProgress } from '@mui/material';

const Login = ({isAuthenticated, isLoading, login, location}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginSubmit = e => {
        e.preventDefault();
        login(email, password);
    }

    if(isAuthenticated && !isLoading) {
        if(location.state && location.state.from) {
            return <Redirect to={location.state.from} />
        } else {
            return <Redirect to='/' />
        }
    }

    return (
        <div>
            { isLoading ? <LinearProgress color="primary" /> : ''}
            <Container maxWidth="sm">
                <Paper>
                    <form>
                        <Typography variant="h3" component="p" >Login</Typography>
                        <TextField fullWidth id="email" label="Email" type="email" variant="outlined" onChange={(event) => setEmail(event.target.value)} />
                        <TextField fullWidth id="password" label="Password" type="password" autoComplete="current-password" variant="outlined" onChange={(event) => setPassword(event.target.value)} />
                        <Button fullWidth variant="contained" color="primary" size="large" onClick={onLoginSubmit}>Login</Button>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    isLoading: state.user.isLoading
});

export default connect(mapStateToProps,{login})(Login);