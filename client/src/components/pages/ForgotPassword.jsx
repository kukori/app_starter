import React, {useState} from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../../redux/user/user.actions';
import { TextField, Button, Typography, Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
    title: {
        marginTop: 8,
        marginBottom: 24
    },
    input: {
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        marginBottom: 16,
        height: 50
    }
}));

const ForgotPassword = ({}) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    const sendResetMessage = e => {
        e.preventDefault();
        const sendSuccess = forgotPassword(email);
        setMessageSent(sendSuccess);
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <Paper className={classes.paper}>
                {messageSent ?
                    <Grid container direction="column" justify="center">
                        <Typography className={classes.title} variant="h3" component="p" >Mail send successfully...</Typography>
                        <CheckCircleOutlineIcon htmlColor="#5cb85c" fontSize="large"/>
                    </Grid>
                    :
                    <form>
                        <Typography className={classes.title} variant="h3" component="p" >Password reset</Typography>
                        <TextField fullWidth className={classes.input} id="email" label="Email" type="email" variant="outlined" onChange={(event) => setEmail(event.target.value)} />
                        <Button fullWidth className={classes.button} variant="contained" color="primary" size="large" onClick={sendResetMessage}>Password reset</Button>
                    </form>
                }
                </Paper>
            </Container>
        </div>
    )
}

export default connect(null, {forgotPassword})(ForgotPassword);