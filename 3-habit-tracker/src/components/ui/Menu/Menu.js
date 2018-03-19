import React from 'react';
import Aux from '../Aux/Aux'
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import IconDashboard from 'material-ui-icons/Dashboard';
import IconSettings from 'material-ui-icons/Settings';
import IconExitToApp from 'material-ui-icons/ExitToApp';
import IconAccount from 'material-ui-icons/AccountBox';
import { Link } from 'react-router-dom'


const Menu = (props) => {
    return(
        <Aux>
            <Divider />
                <List>
                    <ListItem button to="/dashboard" component={Link}>
                        <ListItemIcon>
                            <IconDashboard />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button to="/profile" component={Link}>
                        <ListItemIcon>
                            <IconAccount />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <IconSettings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem to="/" component={Link} button>
                        <ListItemIcon>
                            <IconExitToApp />
                        </ListItemIcon>
                        <ListItemText primary="Exit" />
                    </ListItem>
                </List>
            <Divider />
        </Aux>
    )
}

export default Menu;