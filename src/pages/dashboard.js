import React from 'react'
import Dashboard from '../Dashboard/index'
import SideNavBar from '../Sidebar&Header/SideNavbar/index'
// import HeaderNav from '../Sidebar&Header/Header/index'

const dashboardPage = ({currentUser}) => {
    return (
        <div>
            {/* <HeaderNav /> */}
            <SideNavBar currentUser={currentUser}/>
            <Dashboard />
        </div>
    )
}

export default dashboardPage
