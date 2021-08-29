import React from 'react'
import Dashboard from '../Dashboard/index'
import SideNavBar from '../Sidebar&Header/SideNavbar/index'

const dashboardPage = ({currentUser}) => {
    return (
        <div>
            <SideNavBar currentUser={currentUser}/>
            <Dashboard />
        </div>
    )
}

export default dashboardPage
