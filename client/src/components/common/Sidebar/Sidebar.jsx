import React from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../../redux/site/site.actions';
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Mail, Inbox } from '@mui/icons-material';

const Sidebar = ({sidebarOpen, toggleSidebar, variant = 'permanent'}) => {
    return (
        <Drawer
            variant={variant}
            open={sidebarOpen}
            onClose={toggleSidebar}
        >
            <div >
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <Inbox/> : <Mail/>}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <Inbox/> : <Mail/>}</ListItemIcon>
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