import React from "react";

// import Toastify from 'toastify-js'
// import "toastify-js/src/toastify.css"

import './RemoveModal.css';

import { doc, deleteDoc } from "firebase/firestore/lite";
import { db } from "../../dbConnection";

const RemoveModal = (props) => {
    const removeCard = async (id) => {
        await deleteDoc(doc(db, "cartas", id));
        window.location.reload(false);
    };

    return (
        <>
            <div className="EditModalContainer">
                <div className="RemoveModalPanel">
                    <div className="EditModalContent">
                        <div className="upperContent">
                            <p>Tem certeza que deseja remover a carta ?</p>
                        </div>
                        <div className="EditModalButtonsContainer">
                            <button onClick={() =>{ removeCard(props.id)}} className='editButton'> Sim </button>
                            <button onClick={props.onClose} className='editButton'> Não </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RemoveModal;
