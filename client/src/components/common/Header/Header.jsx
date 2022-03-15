import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../../redux/site/site.actions';
import { logout } from '../../../redux/user/user.actions';
import { AppBar, CssBaseline, Toolbar, Typography, IconButton, Hidden, Grid } from '@mui/material';
import { Menu, ExitToApp } from '@mui/icons-material';

const Header = ({isAuthenticated, logout, toggleSidebar}) => {
    return (
        <Fragment>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container justify={'space-between'}>
                        <Hidden mdUp>
                            <IconButton color="inherit" aria-label="open drawer" onClick={toggleSidebar} edge="start">
                                <Menu/>
                            </IconButton>
                        </Hidden>
                        <Typography variant="h3" noWrap>Title</Typography>
                        { isAuthenticated &&
                            <IconButton color="inherit" aria-label="open drawer" onClick={logout} edge="end" >
                                <ExitToApp/>
                            </IconButton>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, { toggleSidebar, logout })(Header);
