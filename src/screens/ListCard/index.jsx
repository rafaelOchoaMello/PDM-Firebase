import React, { useState, useEffect } from "react";
import { db } from '../../dbConnection';
import { collection, getDocs } from "firebase/firestore/lite";

import './ListCard.css';

import CardTemplate from "../../components/CardTemplate";

const ListCard = ({ cards, setCards }) => {
    const [cardsData, setCardsData] = useState([]);

    const getCards = async (db) => { 
        const cardsCollection = collection(db, 'cartas');
        const cardsSnapshot = await getDocs(cardsCollection);
        const cardsList = cardsSnapshot.docs.map((doc) => {
            const id = doc.id;
            const datas = doc.data();
            return { id, ...datas };
          });
        setCardsData(cardsList);
    }

    useEffect(()=>{getCards(db)},[]);

    return (
        <>
            <div className="listContainer">
               {cardsData.map((cards, index)=>{
                   return <CardTemplate key={index} data={cards} />
               })} 
            </div>
        </>
    );
}

export default ListCard;