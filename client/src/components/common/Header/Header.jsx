import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../../redux/site/site.actions';
import { logout } from '../../../redux/user/user.actions';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, Typography, IconButton, Hidden, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    flexGrow: {
        flexGrow: 1,
    },
    siteTitle: {
        color: theme.palette.background.paper,
        lineHeight: '48px'
    }
}));

const Header = ({isAuthenticated, logout, toggleSidebar}) => {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Grid container justify={'space-between'}>
                        <Hidden mdUp>
                            <IconButton color="inherit" aria-label="open drawer" onClick={toggleSidebar} edge="start" className={classes.menuButton} >
                                <MenuIcon/>
                            </IconButton>
                        </Hidden>
                        <Typography className={classes.siteTitle} variant="h3" noWrap>Title</Typography>
                        { isAuthenticated &&
                            <IconButton color="inherit" aria-label="open drawer" onClick={logout} edge="end" className={classes.menuButton} >
                                <ExitToAppIcon/>
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
