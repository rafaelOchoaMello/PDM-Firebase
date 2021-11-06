import React from 'react'
import './GenericBody.css'
import Header from '../Header/index'
import SideMenu from '../SideMenu'

const GenericBody = ({ children }) => {
    return (
        <div className="GenericBody">
            <Header />
            <SideMenu />
            {children}
        </div>
    )
}

export default GenericBody