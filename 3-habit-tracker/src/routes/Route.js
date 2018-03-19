import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from '../components/Auth/Auth';
import Dashboard from '../components/Dashboard/Dashboard';
import Aux from '../components/ui/Aux/Aux'
import Profile from '../components/Profile/Profile'

const Routes = () => (
    <Router>
        <Aux>
            <Route exact path="/" component={Auth} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
        </Aux>
    </Router>
);

export default Routes;