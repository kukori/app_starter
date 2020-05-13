import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/user/user.actions';
import { TextField, Button, Typography, Container, Paper, LinearProgress } from '@material-ui/core';
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
    loginTitle: {
        marginTop: 8,
        marginBottom: 24
    },
    input: {
        marginTop: 10,
        marginBottom: 10
    },
    loginButton: {
        marginTop: 10,
        marginBottom: 16,
        height: 50
    }
}));

const Login = ({isAuthenticated, isLoading, login, location}) => {
    const classes = useStyles();
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
        <div className={classes.root}>
            { isLoading ? <LinearProgress color="primary" /> : ''}
            <Container maxWidth="sm">
                <Paper className={classes.paper}>
                    <form>
                        <Typography className={classes.loginTitle} variant="h3" component="p" >Login</Typography>
                        <TextField fullWidth className={classes.input} id="email" label="Email" type="email" variant="outlined" onChange={(event) => setEmail(event.target.value)} />
                        <TextField fullWidth className={classes.input} id="password" label="Password" type="password" autoComplete="current-password" variant="outlined" onChange={(event) => setPassword(event.target.value)} />
                        <Button fullWidth className={classes.loginButton} variant="contained" color="primary" size="large" onClick={onLoginSubmit}>Login</Button>
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