import React from 'react';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import MainPage from './component/Main'; // Import your TabTop component here // Import your other components here
import Products from './component/products/ProductMainPage';

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
        <Route path="/" element={ <MainPage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
