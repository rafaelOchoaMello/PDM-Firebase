import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SideMenu.css'
import RegisterModal from '../RegisterModal'

const SideMenu = () => {
    const [registerModal, setRegisterModal] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="SideMenu">
            <div>
                <div className="optButtons" style={{ marginTop: '40px' }} onClick={() => { setRegisterModal(true) }}>
                    <p className='linkStyle'>Registrar</p>
                </div>
                <div className="optButtons" onClick={() => { navigate('/list') }}>
                    <p className='linkStyle'>Listar</p>
                </div>
                <div className="optButtons" onClick={() => { navigate('/find') }}>
                    <p className='linkStyle'>Pesquisar</p>
                </div>
            </div>
            <div className="chartBtn" title="Estatíticas" onClick={() => { navigate('/data') }}>
            </div>
            {registerModal ? <RegisterModal onClose={() => setRegisterModal(false)} /> : null}
        </div>
        
    )
}

export default SideMenu;