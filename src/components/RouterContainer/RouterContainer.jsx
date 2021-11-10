import React from "react";
import { Routes, Route } from 'react-router-dom';

import RegisterCard from "../../screens/RegisterCard";
import ListCard from "../../screens/ListCard";
import EstData from "../../screens/EstData";
import NotFound from "../../screens/NotFound";

const RouterContainer = () => {
    return (
        <main>
            <Routes>
                <Route exact path="/home" />
                <Route exact path="/list" element={<ListCard />}>
                    {/* Vem o componente de tela do listagem */}
                </Route>
                <Route exact path="/form" element={<RegisterCard />} >
                    {/* Vem o componente de tela do formulário */}
                </Route>
                <Route exact path="/data" element={<EstData />}>
                    {/* Vem o componente de tela do Estatística*/}
                </Route>
                <Route path="*" element={<NotFound />}>
                    {/* Vem o componente de tela do notFound*/}
                </Route>
            </Routes>
        </main>
    );
}

export default RouterContainer;