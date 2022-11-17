import React from "react";
import {CssBaseline, GlobalStyles} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navigation from "./components/global/Navigation";
import Units from "./pages/Unit";
import './App.css';
import UnitDetails from "./pages/UnitDetails";

function App() {
    return (
        <React.StrictMode>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <CssBaseline/>
            <Navigation/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/units" element={<Units/>}/>
                    <Route path="/unit/:id" element={<UnitDetails/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
