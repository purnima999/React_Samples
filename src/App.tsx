import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateQrCodeModel from './Components/createQrCodeModel';
import FileFormat from './Components/fileFormat';
import DemoFiles from './Components/files';
import './i18n';
import Main from './Components/translationUsingi18n';
import { RouteCmp } from './routes';


function App() {
  return (
    <div className="App">
      {/* <CreateQrCodeModel />
      <FileFormat/>
      <DemoFiles/> */}
      <RouteCmp />

    </div>
  );
}

export default App;
