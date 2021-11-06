import React from 'react'
import './GenericBody.css'
import Header from '../Header/index'
import SideMenu from '../SideMenu'
import ContentContainer from '../ContentContainer'

const GenericBody = ({ children }) => {
    return (
        <div className="GenericBody">
            <Header />
            <div className="contentDisplay">
                <SideMenu />
                <ContentContainer />
                {children}
            </div>
        </div>
    )
}

export default GenericBody