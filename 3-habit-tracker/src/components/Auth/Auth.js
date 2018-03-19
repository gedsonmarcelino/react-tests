import React, { Component } from 'react'
import Layout from '../Layout/Auth/Auth'
import Card, { CardActions, CardContent, CardHeader }  from 'material-ui/Card'
import Grid  from 'material-ui/Grid'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom'


import classes from './Auth.css'

export default class Auth extends Component {
  render() {
    return (
      <Layout>
          <Card className={classes.Auth}>
              <CardHeader className={classes.Header} title="Habit Tracker"/> 
              <CardContent className={classes.Content}>
                    <TextField
                        id="with-placeholder"
                        label="Email address"
                        margin="normal" />
                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        margin="normal" />
              </CardContent>
              <CardActions  className={classes.Actions} >
                  <Grid container justify="center">
                    <Button component={Link} to="/dashboard" variant="raised" color="primary">
                        Login
                    </Button>
                  </Grid>
              </CardActions>
          </Card>
      </Layout>
    )
  }
}
