import React from "react"
import './CardTemplate.css'

const CardTemplate = () => {
    // function moneyFormat(value) {
    //     return Intl.NumberFormat('pt-br', {
    //         style: 'currency',
    //         currency: 'BRL',
    //     }).format(value)
    // }

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
                    <div className="optContainer rmvIcon" onClick={() => { alert('rmvIcon') }}>
                    </div>
                    <div className="optContainer">
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardTemplate