import React from 'react';
import Home from './components/Home';
import Contador from './components/Contador';
import MensajeEspecial from './components/MensajeEspecial';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Contador dias={200} />
      <MensajeEspecial mensaje="Te amo con todo mi corazón, mi princesa hermosa ❤️" />
    </div>
  );
}

export default App;
