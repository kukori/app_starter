import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../../redux/site/site.actions'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Header = ({toggleSidebar}) => {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <Hidden mdUp>
                    <IconButton color="inherit" aria-label="open drawer" onClick={toggleSidebar} edge="start" className={classes.menuButton} >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Typography variant="h6" noWrap>Persistent drawer</Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    sidebarOpen: state.site.sidebarOpen
});

export default connect(mapStateToProps, { toggleSidebar })(Header);
