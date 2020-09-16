import React from 'react';
import Navbar from './components/Navbar';
import Row from './components/row';
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <main className='container'>
        <div style={{ backgroundColor: 'orange', height: '1000px' }}>
          <Row />
        </div>
      </main>
    </div>
  );
}

export default App;
