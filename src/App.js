import React from "react";
import GenericBody from "./components/GenericBody";
import { BrowserRouter } from "react-router-dom";
import "./style/global.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <GenericBody />
      </BrowserRouter>
    </>
  );
}

export default App;
