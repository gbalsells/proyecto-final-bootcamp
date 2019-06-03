import React from 'react';
import IngredientList from '../../containers/IngredientList'
import '../pages.scss'

const Ingredients = () => {
  return(
    <React.Fragment>
      <h1 className="page-title">Our favourite ingredients </h1>
      <IngredientList />
    </React.Fragment>
  )    
}

export default Ingredients;