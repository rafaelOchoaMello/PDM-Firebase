import React from 'react'
import './ContentContainer.css'
import CardTemplate from '../CardTemplate'

const ContentContainer= ({ children }) => {
    return (
        <div className="ContentContainer">
            <div className="insideContent">
                <CardTemplate />
                <CardTemplate />
                <CardTemplate />
                <CardTemplate />
            </div>
        </div>
    )
}

export default ContentContainer