import React from 'react';
import Layout from '../Layout/Layout'
import HabitList from './HabitList/HabitList'

const Dashboard = (props) => {
    return (
        <Layout>            
            <HabitList />
        </Layout>        
    )
}

export default Dashboard;