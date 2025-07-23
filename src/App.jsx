import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import CalculatePage from "./pages/Calculate";
import FetchAPIPage from "./pages/FetchAPI";
import NotFound from "./pages/NotFound";

function App() {
    const [radius, setRadius] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<HomePage />} />
                        <Route path="calculate" element={<CalculatePage setHeight={setHeight} height={height} setRadius={setRadius} radius={radius} />} />
                        <Route path="fetch" element={<FetchAPIPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
