import React, {Component} from 'react';
import IconDone from 'material-ui-icons/Done';
import IconCropSquare from 'material-ui-icons/CropSquare';

import classes from './Check.css';

export default class Check extends Component {
    state = {
        checked: false
    }

    componentDidMount() {
        this.setState({ checked: this.props.value });
    }

    clickHandler = event => {
        this.setState({ checked: !this.state.checked});
    }

    render() {
        if ( this.state.checked ) 
            return (<IconDone className={classes.Check} onClick={this.clickHandler} />);
        else 
            return (<IconCropSquare className={classes.Check} onClick={this.clickHandler} />);
    }
}