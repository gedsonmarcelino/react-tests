import React from 'react';
import Grid from 'material-ui/Grid';

const Auth = (props) => {
    return(
        <Grid container 
            spacing={16} 
            justify="center">
            <Grid item xs={4} >
                {props.children}
            </Grid>
        </Grid>
    )
}

export default Auth;