import React from 'react'
import './ContentContainer.css'
import RouterContainer from '../RouterContainer/RouterContainer'

const ContentContainer = ({ children }) => {
    return (
        <div className="ContentContainer">
            <div className="insideContent">
                <RouterContainer />
            </div>
        </div>
    )
}

export default ContentContainer