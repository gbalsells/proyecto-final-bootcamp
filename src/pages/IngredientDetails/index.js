import React from 'react';
import IngredientDetails from '../../containers/IngredientDetails'

const Ingredient = (props) => {
  return (
    <React.Fragment>
      <h1>Ingredient Details</h1>
      <IngredientDetails {...props}/>
    </React.Fragment>
  )
}

export default Ingredient;