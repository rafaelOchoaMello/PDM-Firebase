import React, { useState } from "react"
import './CardTemplate.css'

import EditModal from "../EditModal";
import RemoveModal from "../RemoveModal";

const CardTemplate = ({ props }) => {
    const [editModal, setEditModal] = useState(false);
    const [rmvModal, setRmvModal] = useState(null);

    return (
        <>
            <div style={{ display: "flex", flexFlow: "column" }}>
                <div className="cardContainer">
                    <div className="cardHeader">
                        <p>Nome da carta</p>
                    </div>
                    <div className="cardImage">
                        <img src="https://www.w3schools.com/bootstrap4/img_avatar6.png" alt="" srcset="" />
                    </div>
                    <div className="cardBody">
                        <p>Jogo</p>
                        <p className="rarityTitle">Raridade</p>
                        <p>(1/10)</p>
                        <p className='priceStyle'>Valor</p>
                    </div>
                </div>
                <div style={{ display: "flex", flexFlow: "row" }}>
                    <div className="optContainer rmvIcon" onClick={() => { setRmvModal(true) }}>
                    </div>
                    <div className="optContainer editIcon" onClick={() => { setEditModal(true) }}/>
                </div>
            </div>
            {editModal ? <EditModal onClose={() => setEditModal(false)} /> : null}
            {rmvModal ? <RemoveModal onClose={() => setRmvModal(false)} /> : null}
        </>
    );
}

export default CardTemplate