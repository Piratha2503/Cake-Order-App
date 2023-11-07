import React from 'react'
import Clients from './contents/clients'
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import Orders from './contents/orders';
import Designs from './contents/designs';

function MainContents() {
  return (
    
    <Router>
      <div>
        <Routes>
        <Route path="/" element={ <Orders/>} />
          <Route path="/clients" element={<div>
            <Clients/>
          </div>} />
          <Route path="/designs" element={<div>
            <Designs/>
          </div>} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default MainContents
