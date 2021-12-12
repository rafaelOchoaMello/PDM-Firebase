import React from "react";
import './RemoveModal.css';

const RemoveModal = (props) => {
    return (
        <>
            <div className="EditModalContainer">
                <div className="RemoveModalPanel">
                    <div className="EditModalContent">
                        <div className="upperContent">
                            <p>Tem certeza que deseja remover a carta ?</p>
                        </div>
                        <div className="EditModalButtonsContainer">
                            <button onClick={props.onClose} className='editButton'> Sim </button>
                            <button onClick={props.onClose} className='editButton'> Não </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RemoveModal;
