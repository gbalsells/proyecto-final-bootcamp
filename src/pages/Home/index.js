import React from 'react';
import Recipes from '../../containers/Recipes'
import '../pages.scss'

const Home = () => {
    return (
      <React.Fragment>
        <h1 className="page-title">Our favourite recipes</h1>
        <Recipes />
      </React.Fragment>
    ) 
}

export default Home;