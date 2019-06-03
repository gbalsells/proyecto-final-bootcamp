import React from 'react';
import ChefList from '../../containers/ChefList'
import '../pages.scss'

const Chefs = () => {
    return (
      <React.Fragment>
        <h1 className="page-title">Our favourite chefs</h1>
        <ChefList />
      </React.Fragment>
    ) 
}

export default Chefs;