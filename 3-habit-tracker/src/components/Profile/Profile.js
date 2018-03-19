import React from 'react';
import Layout from '../Layout/Layout'
import Typography from 'material-ui/Typography';

const Dashboard = (props) => {
    return (
        <Layout>            
            <Typography variant="headline">
                Profile
            </Typography>
            <br />
            <Typography variant="title">
                Luke Skywalker
            </Typography>
            <br />
            <Typography variant="subtitle">
                skywalker@alwayslive.com
            </Typography>
        </Layout>        
    )
}

export default Dashboard;