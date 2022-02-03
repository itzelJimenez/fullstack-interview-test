import * as React from 'react';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import { useNavigate } from 'react-router-dom';

import { routes } from '../../Router/routes';

const Menu = () => {
    const navigate = useNavigate();
    const handleRedirect = (route) => navigate(route);

    return ( 
        <div>
            <Toolbar />
            <Divider />
            <List>
                {routes.map((element) => (
                <ListItem button key={element.route} onClick={() => handleRedirect(element.route)}>
                    <ListItemIcon>
                    <element.icon />
                    </ListItemIcon>
                    <ListItemText primary={element.name} />
                </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Menu;