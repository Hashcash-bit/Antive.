import React from 'react'
import Dashboard from '../Dashboard/index'
import OfficialNav from '../OfficialNavbar/OfficialNav'
import ChakraNavPage from '../OfficialNavbar/ChakraNav/pages/OfficialSidebar'
import SideNavBar from '../Sidebar&Header/SideNavbar/index'

const dashboardPage = ({currentUser}) => {
    return (
        <div>
            {/* <SideNavBar currentUser={currentUser}/> */}
            {/* <ChakraNavPage /> */}
            <OfficialNav />
            <Dashboard />
        </div>
    )
}

export default dashboardPage
