import React from 'react';
import RecipeDetails from '../../containers/RecipeDetails'

const RecipeDetail = (props) => {
    return (
      <React.Fragment>
        <RecipeDetails {...props} />
      </React.Fragment>
    )
}

export default RecipeDetail;