import React from 'react'
import Filter from '../components/filter';
import Productpage from '../components/productpage';


function category() {
  return (
    <div>
      <div className='App other-page-top'>
        <div className="BreakPointContainer AppContent">
          <div className="layout ProductList align-start">
            <Filter />
            <Productpage/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default category