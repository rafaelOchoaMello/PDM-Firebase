import React, { useState } from "react";
import './EditModal.css';


const EditModal = (props) => {
    const [newCardTitle, setNewCardTitle] = useState(null);
    const [newGame, setNewGame] = useState(null);
    const [newRarity, setNewRarity] = useState(null);
    const [newValue, setNewValue] = useState(null);
    const [newImageLink, setNewImageLink] = useState(null);

    const showData = () => {
        console.log(newCardTitle);
        console.log(newGame);
        console.log(newRarity);
        console.log(newValue);
        console.log(newImageLink);
    }

    return (
        <>
            <div className="EditModalContainer">
                <div className="EditModalPanel">
                    <div className="EditModalContent">
                        <div className="upperContent">
                            <div className="imageCardContainer">
                            </div>
                            <form>
                                <label htmlFor="newCardTitle">Título:</label>
                                <br />
                                <input
                                    type="text"
                                    id='newCardTitle'
                                    name='newCardTitle'
                                    onChange={(e) => {
                                        e.target.value.length > 0
                                            ? setNewCardTitle(e.target.value)
                                            : setNewCardTitle(null)
                                    }}                                    
                                />
                                <br />
                                <label htmlFor="newGame">Jogo:</label>
                                <br />
                                <select
                                    name="newGame"
                                    id="newGame"
                                    onChange={(e) => { setNewGame(e.target.value) }}
                                >
                                    <option value="" selected disabled hidden>-</option>
                                    <option  value="pokemon">Pokémon</option>
                                    <option value="yugioh">Yu-Gi-Oh</option>
                                </select>
                                <br />
                                <label htmlFor="newRarity">Raridade:</label>
                                <br />
                                <select
                                    name="newRarity"
                                    id="newRarity"
                                    onChange={(e) => { setNewRarity(e.target.value) }}
                                >
                                    <option value="" selected disabled hidden>-</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                <br />
                                <label htmlFor="newValue">Valor(R$):</label>
                                <br />
                                <input type="number" name="newValue" id="newValue" min='0.50'
                                    onChange={(e) => {
                                        e.target.value.length > 0
                                        ? setNewValue(e.target.value)
                                        : setNewValue(null)
                                    }}
                                />
                                <br />
                                <label htmlFor="newImageLink">Imagem(url):</label>
                                <br />
                                <input
                                    type="text"
                                    id='newImageLink'
                                    name='newImageLink'
                                    onChange={(e) => {
                                        e.target.value.length > 0
                                            ? setNewImageLink(e.target.value)
                                            : setNewImageLink(null)
                                    }}
                                />
                            </form>
                        </div>
                        <div className="EditModalButtonsContainer">
                            <button onClick={() => { showData() }} className='editButton'> Salvar </button>
                            <button onClick={props.onClose} className='editButton'> Cancelar </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditModal;