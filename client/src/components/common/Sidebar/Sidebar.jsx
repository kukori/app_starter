import React from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../../redux/site/site.actions';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        marginTop: 60,
        overflow: 'auto',
    },
}));

const Sidebar = ({sidebarOpen, toggleSidebar, variant = 'permanent'}) => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant={variant}
            open={sidebarOpen}
            onClose={toggleSidebar}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerContainer}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    )
}

const mapStateToProps = state => ({
    sidebarOpen: state.site.sidebarOpen
});

export default connect(mapStateToProps, { toggleSidebar })(Sidebar);