import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Result } from "./Result";


export const RouterConfig: React.VFC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App/>} />
                    <Route path="result" element={<Result />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}