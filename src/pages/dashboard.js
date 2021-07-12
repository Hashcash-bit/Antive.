import React from 'react'
import Dashboard from '../Dashboard/index'
import SideNavBar from '../Sidebar&Header/SideNavbar/index'
// import HeaderNav from '../Sidebar&Header/Header/index'

const dashboardPage = () => {
    return (
        <div>
            {/* <HeaderNav /> */}
            <SideNavBar />
            <Dashboard />
        </div>
    )
}

export default dashboardPage
