import React from 'react';
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/product/:id" element={<ProductDetail />}/>
        </Routes>
      </div>
    </Router>
  )
}


export default App