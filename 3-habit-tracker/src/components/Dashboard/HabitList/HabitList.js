import React, {Component} from 'react';

import Aux from '../../ui/Aux/Aux'
import Grid from 'material-ui/Grid'
import IconGrid from 'material-ui-icons/ViewModule'
import IconList from 'material-ui-icons/ViewList'
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import ContentGrid from './Grid/Grid'
import ContentList from './List/List'

import classes from './HabitList.css'

class HabitList extends Component {
    
    state = {
        view: 'list'
    }

    changeHandler = (event, value) => {
        this.setState({view: value});
    }

    showContent = () => {
        return ( this.state.view === 'grid' ) ? (<ContentGrid />) : (<ContentList />);
    }

    render() {
        return (
            <Aux>                
                <Grid container className={classes.Header} >
                    <Grid item xs={4}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={4}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={4} className={classes.Items} >
                        <BottomNavigation
                            value={this.state.view}
                            onChange={this.changeHandler}>
                            <BottomNavigationAction className={classes.ButtonNavigation} value="list" icon={<IconList />} />
                            <BottomNavigationAction className={classes.ButtonNavigation} value="grid" icon={<IconGrid />} />
                        </BottomNavigation>
                    </Grid>
                </Grid>
                {this.showContent()}
            </Aux>
        );
    }
}


export default HabitList;