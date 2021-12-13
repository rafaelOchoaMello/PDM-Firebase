import React, { useState } from "react";
import { collection, query, where } from "firebase/firestore/lite";
import { db } from '../../dbConnection';

import './Find.css';

const Find = () => {
    const [toFind, setToFind] = useState(null);

    return (
        <div className="findContainer">
            <form>
                <label htmlFor="findTitle">Título:</label>
                <br />
                <input
                    type="text"
                    id='findTitle'
                    name='findTitle'
                    onChange={(e) => {
                        e.target.value.length > 0
                            ? setToFind(e.target.value)
                            : setToFind(null)
                        console.log(toFind)
                    }}
                />
            </form>
            <button onClick={()=>{alert(toFind)}} className='findButton'> Pesquisar </button>
        </div>
    );
}

export default Find;