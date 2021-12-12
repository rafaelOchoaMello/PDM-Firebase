import React from "react";
import { Routes, Route } from 'react-router-dom';

import ListCard from "../../screens/ListCard";
import EstData from "../../screens/EstData";
// import NotFound from "../../screens/NotFound";
import Find from "../../screens/Find";
const RouterContainer = () => {
    return (
        <main>
            <Routes>
                <Route exact path="*" element={<ListCard />}>
                    {/* Vem o componente de tela do listagem */}
                </Route>
                <Route exact path="/data" element={<EstData />}>
                    {/* Vem o componente de tela do Estatística*/}
                </Route>
                <Route exact path="/find" element={<Find/>} />
            </Routes>
        </main>
    );
}

export default RouterContainer;