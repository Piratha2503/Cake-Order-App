import React from 'react'
import Clients from './contents/clients'
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import Orders from './contents/orders';
import Designs from './contents/frontPage/designs';
import DesignAddEdit from './contents/frontPage/designAddEdit';
import { BestSellers, FeatureProducts, Hello, Hi, RecentPost, ShopCategory, Slides } from './contents/frontPage/frontPage';

function MainContents() {
  return (
    <div>
        <Routes>
        <Route path="/" element={ <Orders/>} />
          <Route path="/clients" element={<div>
            <Orders/>
          </div>} />
          <Route path="/orders" element={<div>
            <Clients/>
          </div>} />
          <Route path="/designs" element={<div>
            <Designs/>
          </div>} />
          <Route path="/designs/addEdit" element={<div>
            <DesignAddEdit/>
          </div>} />
          <Route path="/designs/slides" element={<div>
           <Slides/>
          </div>} />
          <Route path="/designs/shop" element={<div>
            <ShopCategory/>
          </div>} />
          <Route path="/designs/sellers" element={<div>
            <BestSellers/>
          </div>} />
          <Route path="/designs/featureProducts" element={<div>
            <FeatureProducts/>
          </div>} />
          <Route path="/designs/recent" element={<div>
            <RecentPost/>
          </div>} />
        </Routes>
        
      </div>
  )
}

export default MainContents
