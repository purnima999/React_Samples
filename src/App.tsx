import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateQrCodeModel from './Components/createQrCodeModel';
import FileFormat from './Components/fileFormat';
import DemoFiles from './Components/files';

function App() {
  return (
    <div className="App">
      {/* <CreateQrCodeModel /> */}
      {/* <FileFormat/> */}
      <DemoFiles/>
    </div>
  );
}

export default App;
