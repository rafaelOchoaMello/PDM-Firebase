import React, { useState } from "react"
import './CardTemplate.css'

import EditModal from "../EditModal";
import RemoveModal from "../RemoveModal";

const CardTemplate = (props) => {
    const [editModal, setEditModal] = useState(false);
    const [rmvModal, setRmvModal] = useState(null);

    function moneyFormat(value){
        return Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(value)
      }

    return (
        <>
            <div style={{ display: "flex", flexFlow: "column" }}>
                <div className="cardContainer">
                    <div className="cardHeader">
                        <p 
                            style={{fontSize: props.data.nome.length > 10 ? '11px' : '15px' }}
                        >
                            {props.data.nome}
                        </p>
                    </div>
                    <div className="cardImage">
                        <img src={props.data.imagem} alt="" srcset={props.data.imagem} />
                    </div>
                    <div className="cardBody">
                        <p>{props.data.jogo}</p>
                        <p className="rarityTitle">Raridade</p>
                        <p>({props.data.raridade}/10)</p>
                        <p className='priceStyle'>{moneyFormat(props.data.valor)}</p>
                    </div>
                </div>
                <div style={{ display: "flex", flexFlow: "row" }}>
                    <div className="optContainer rmvIcon" onClick={() => { setRmvModal(true) }}>
                    </div>
                    <div className="optContainer editIcon" onClick={() => { setEditModal(true) }}/>
                </div>
            </div>
            {editModal ? <EditModal onClose={() => setEditModal(false)} imgUrl={props.data.imagem}  id={props.data.id}/> : null}
            {rmvModal ? <RemoveModal onClose={() => setRmvModal(false)} id={props.data.id}/> : null}
        </>
    );
}

export default CardTemplate