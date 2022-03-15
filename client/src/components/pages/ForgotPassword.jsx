import React, {useState} from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../../redux/user/user.actions';
import { TextField, Button, Typography, Container, Paper, Grid } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    const sendResetMessage = e => {
        e.preventDefault();
        const sendSuccess = forgotPassword(email);
        setMessageSent(sendSuccess);
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Paper>
                {messageSent ?
                    <Grid container direction="column" justify="center">
                        <Typography variant="h3" component="p" >Mail send successfully...</Typography>
                        <CheckCircleOutline htmlColor="#5cb85c" fontSize="large"/>
                    </Grid>
                    :
                    <form>
                        <Typography variant="h3" component="p" >Password reset</Typography>
                        <TextField fullWidth id="email" label="Email" type="email" variant="outlined" onChange={(event) => setEmail(event.target.value)} />
                        <Button fullWidth variant="contained" color="primary" size="large" onClick={sendResetMessage}>Password reset</Button>
                    </form>
                }
                </Paper>
            </Container>
        </div>
    )
}

export default connect(null, {forgotPassword})(ForgotPassword);