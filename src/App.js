import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Calculator from './components/Calculator';
import Quote from './quotes/Quotes';



function App() {
  return (
    <div className="App">
      <Calculator />
      <Quotes />
    </div>
  );
}

export default App;
