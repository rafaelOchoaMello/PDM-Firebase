import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SideMenu.css'


const SideMenu = () => {
    const navigate = useNavigate();
    return (
        <div className="SideMenu">
            <div>
                <div className="optButtons" style={{ marginTop: '40px' }} onClick={() => { navigate('/form') }}>
                    <p>Registrar</p>
                </div>
                <div className="optButtons" onClick={() => { navigate('/list') }}>
                    <p>Listar</p>
                </div>
            </div>
            <div className="chartBtn" title="Estatíticas" onClick={() => { navigate('/data') }}>
            </div>
        </div>
    )
}

export default SideMenu;