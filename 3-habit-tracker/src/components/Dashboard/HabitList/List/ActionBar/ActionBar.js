import React, {Component} from 'react';
import {  TableCell,  TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button'
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import AutoComplete from '../../../../ui/AutComplete/AutoComplete'

import classes from './ActionBar.css'

export default class ActionBar extends Component {

    state = {
        item: {
            show: false,
            value: ""
        }
    }

    changeHandler = (event) => {
        const item = {...this.state.item};
        item.value = event.target.value;
        this.setState({item: item});
    };

    showActionBarHandler = (value, event) => {
        const item = {...this.props};
        item.show = value;
        item.value = "";
        this.setState({item: item});
    };

    actionBar = () => {
        const actionItem = (
            <TableRow>
                <TableCell colSpan="1">                            
                    <AutoComplete />
                </TableCell>
                <TableCell  className={classes.Actions} colSpan="7">                            
                    <Button size="small" variant="raised" color="primary">
                        Save
                    </Button>
                    &nbsp;
                    <Button onClick={this.showActionBarHandler.bind(this, false)} 
                        size="small" variant="raised" color="default">
                        Cancel
                    </Button>
                </TableCell>
            </TableRow>
        );

        const actionButton = (
            <TableRow>
                <TableCell className={classes.actions} colSpan="8">                            
                    <Button onClick={this.showActionBarHandler.bind(this, true)} 
                        size="small" variant="raised" color="primary">
                        New
                    </Button>
                </TableCell>
            </TableRow>
        );

        return this.state.item.show  ? (actionItem) : (actionButton);

    };

    render() {
        return this.actionBar();
    }
}
