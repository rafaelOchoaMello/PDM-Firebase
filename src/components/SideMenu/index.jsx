import React from 'react'
import './SideMenu.css'
import chartImage from '../../images/chartImg.png'

const SideMenu = () => {
    return (
        <div className="SideMenu">
            <div>
                <div className="optButtons" style={{ marginTop: '40px' }}>
                    <p>Registrar</p>
                </div>

                <div className="optButtons">
                    <p>Listar</p>
                </div>
            </div>
            <div className="chartBtn" title="Estatíticas"/>            
        </div>
    )
}

export default SideMenu;