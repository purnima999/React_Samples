import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarList from './Components/navBar';
import CreateQrCodeModel from './Components/createQrCodeModel';
import FileFormat from './Components/fileFormat';
import DemoFiles from './Components/files';
import DragDrop from './Components/drangNdrop';

export function RouteCmp() {

    return (
        <BrowserRouter>
            <NavbarList />
            <Routes>
                <Route path="/CreateQrCodeModel" element={<CreateQrCodeModel />} />
                <Route path="/FileFormat" element={<FileFormat />} />
                <Route path="/DemoFiles" element={<DemoFiles />} />
                <Route path="/dragNdrop" element={<DragDrop />} />

            </Routes>
        </BrowserRouter>
    )
}