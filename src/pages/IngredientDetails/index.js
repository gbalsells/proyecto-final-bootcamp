import React from 'react';
import IngredientDetails from '../../containers/IngredientDetails'

const Ingredient = (props) => {
  return (
    <React.Fragment>
      <IngredientDetails {...props}/>
    </React.Fragment>
  )
}

export default Ingredient;