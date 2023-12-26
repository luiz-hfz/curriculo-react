// src/App.js
import React from 'react';
import './App.css';
import Info from './components/Info';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <div className="App">
        <Info />
        <Experience />
        {/* Adicione mais seções aqui conforme necessário */}
      </div>
    </div>
  );
}

export default App;
