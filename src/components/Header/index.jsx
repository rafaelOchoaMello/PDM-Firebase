import React from 'react'
import cardHeaderImage from '../../images/cardHeaderImage.png'
import './Header.css'

const AppHeaderBar = () => {
  return (
    <div className="row">
      <div id="appHeaderBar">
        <div>
          <h1>
            TCG Hunter - Boosters, Decks e cartas avulsas
          </h1>
          <h4>
            Monte seu baralho, complete sua coleção!
          </h4>
        </div>
        <img src={cardHeaderImage} alt="Logo"></img>
      </div>
    </div>
  );
}

export default AppHeaderBar;