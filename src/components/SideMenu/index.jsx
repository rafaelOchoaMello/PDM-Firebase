import React from 'react'
import './SideMenu.css'

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
            <div className="chartBtn" title="Estatíticas"
                onClick={() => { alert('Estatísticas') }}
            />
        </div>
    )
}

export default SideMenu;    